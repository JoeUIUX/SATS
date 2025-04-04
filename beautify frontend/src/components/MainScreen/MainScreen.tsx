import React, { useState, useEffect, useRef } from "react";
import styles from "./MainScreen.module.css";
import ToTestList from "../ToTestList/ToTestList";
import { FaCube, FaCheck, FaTimes, FaWrench, FaBars, FaCog, FaPlus, FaEdit, FaTrash, FaInfoCircle, FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import mammoth from "mammoth"; // Import mammoth for `.docx` extraction, npm install mammoth
import { renderAsync } from "docx-preview"; // npm install docx-preview
import { Document, Packer, Paragraph } from "docx"; // npm install docx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Profile } from '@/types/types';
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TurndownService from "turndown";
import { DragOverlay, DndContext, closestCorners, closestCenter, pointerWithin, getFirstCollision, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { Collision, CollisionDetection } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableBox from "../MainScreen/DraggableBox"; // Import Draggable Box
import { useDroppable } from "@dnd-kit/core";
import { useDndContext } from "@dnd-kit/core";
import { rectIntersection } from "@dnd-kit/core";
import { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import ThreeDModelWindow from "@/components/ModelWindow/ThreeDModelWindow";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { WindowName } from "@/types/types";
import CheckoutTestProgress from "@/components/CheckoutTestProgress/CheckoutTestProgress";
import { connectToMcc, setSimulationMode } from "@/utils/mccUtils";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"; // fall back
// Ensure this is correct

interface DroppableContainerType {
  id: string;
  data: {
    type: string;
    accepts: string[];
    isDropZone?: boolean;
  };
}

interface CollisionRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

interface CollisionData {
  droppableContainer: DroppableContainerType;
  value: number;
  rect: CollisionRect;
}

interface CustomCollision {
  id: string;
  data: CollisionData;
}

interface DraggableItem {
  id: string;
  header: string;
  options: string[];
  isDropped: boolean;
  checkedOptions: Record<string, boolean>;
}

interface MainScreenProps {
  openToTestList: (forceRender?: boolean) => void; // Updated to accept optional parameter
  closeToTestList: () => void;  // ✅ Accept close function as a prop
  openServerWindow: () => void;
  openModelWindow: (profileId?: number) => void;
  closeModelWindow: () => void;  // ✅ Accept close function
  showToTestList: boolean;  // ✅ Accept this prop
  showThreeDModelWindow: boolean;  // ✅ Accept this prop
  threeDModelProfileId: number | null;  // ✅ Accept profile ID
  windowZIndexes: { [key in WindowName]: number };  // ✅ Ensure proper indexing
  bringWindowToFront: (windowName: WindowName) => void;  // ✅ Ensure correct function type
  zIndexCounter: number;  // ✅ Accept counter
  navigateWithState?: (to: string, options?: any) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ 
  openToTestList, 
  closeToTestList, // ✅ Use close function
  openServerWindow, 
  openModelWindow,
  closeModelWindow,  // ✅ Use function from props
  showToTestList,  // ✅ Use this prop
  showThreeDModelWindow,  // ✅ Use this prop
  threeDModelProfileId,  // ✅ Use profile ID from props
  windowZIndexes, // ✅ Use windowZIndexes from props
  bringWindowToFront,  // ✅ Use function from props
  zIndexCounter  // ✅ Use counter from props
}): React.ReactElement => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [uploadedText, setUploadedText] = useState("");
  const [isEditing, setIsEditing] = useState(false); // for aboutSection
  const [tempDescription, setTempDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState<{ src: string; alt: string }[]>([]);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<{ 
    [key: string]: { 
      description: string; 
      images: { src: string; alt: string }[]; 
      uploadedFileName?: string; // ✅ Store filename per profile
    } 
  }>({});
  const [showCheckout, setShowCheckout] = useState(false);
  const [isCheckoutEditing, setIsCheckoutEditing] = useState(false); // For checkoutSection
  const [droppedItems, setDroppedItems] = useState<DraggableItem[]>([]);
  // Manage draggable items
  const [items, setItems] = useState<DraggableItem[]>([
    { id: "1", header: "OBC-1", options: ["eMMC"], isDropped: false, checkedOptions: {} }, // ✅ Ensure consistent key name
    { id: "2", header: "OBC-2", options: ["SD Card", "EEPROM"], isDropped: false, checkedOptions: {} },
    { id: "3", header: "S-Band", options: ["Telemetry", "Ground Pass"], isDropped: false, checkedOptions: {} },
    { id: "4", header: "UHF", options: ["Telemetry", "Ground Pass"], isDropped: false, checkedOptions: {} },
    { id: "5", header: "HEPS", options: ["Solar Panel", "Heater", "Hdrm"], isDropped: false, checkedOptions: {} },
    { id: "6", header: "ADCS", options: ["Version Check", "Gyroscope", "Magnetometer", "Star Tracker", "FOG", "Fine Sun Sensor", "Coarse Sun Sensor", "Earth Sensor", "Reaction Wheel", "Magnetic Torquer"], isDropped: false, checkedOptions: {} },
    { id: "7", header: "GPS", options: ["Version Check"], isDropped: false, checkedOptions: {} },
    { id: "8", header: "Propulsion", options: ["ECU-1 PMA", "ECU-1 PPU-1", "ECU-2 PMA", "ECU-2 PPU-2"], isDropped: false, checkedOptions: {} },
    { id: "9", header: "PCS", options: ["SD Card"], isDropped: false, checkedOptions: {} },
    { id: "10", header: "Payload", options: ["LEOCAM", "AOD"], isDropped: false, checkedOptions: {} },
    { id: "11", header: "X-Band", options: ["Telecommand", "Telemetry"], isDropped: false, checkedOptions: {} },
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [dummyState, setDummyState] = useState(false); // Declare a state for forcing re-renders
  const [sortableKey, setSortableKey] = useState(0);
  const [show3DModel, setShow3DModel] = useState(false); // Manage pop-up visibility
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);
  const [showCheckoutTest, setShowCheckoutTest] = useState(false);
  const [mccSocket, setMccSocket] = useState<any>(null);
  // Add this state to store the real MCC socket
const [realMccSocket, setRealMccSocket] = useState<any>(null);
  
  // In MainScreen.tsx, add this after your state declarations but before your functions
  const dragTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const removeDroppedItem = (itemId: string) => {
    if (dragTimeoutRef.current) {
      clearTimeout(dragTimeoutRef.current);
    }
  
    console.log(`🗑️ Attempting to remove item ${itemId} from top section`);
  
    // ✅ Remove from `droppedItems`
    setDroppedItems(prev => {
      const updatedDroppedItems = prev.filter(item => item.id !== itemId);
      console.log("✅ Updated dropped items after removal:", updatedDroppedItems);
      return [...updatedDroppedItems]; // ✅ Force reactivity
    });
  
    // ✅ Ensure item is draggable again by updating `items` state
    setItems(prev => {
      const updatedItems = prev.map(item => {
        if (item.id === itemId) {
          console.log(`✅ Resetting isDropped for item ${itemId}`);
          return { ...item, isDropped: false };
        }
        return item;
      });
      console.log("✅ Updated items after removal:", updatedItems);
      return [...updatedItems]; // ✅ Ensure a new array reference for reactivity
    });
  
    // ✅ Reset DOM attributes to make the item draggable again
    setTimeout(() => {
      const bottomItem = document.querySelector(`[data-draggable-id="${itemId}"]`) as HTMLElement;
      if (bottomItem) {
        console.log(`✅ Resetting DOM attributes for item ${itemId}`);
        bottomItem.removeAttribute('data-dropped');
        bottomItem.style.pointerEvents = 'auto';
        bottomItem.style.opacity = '1';
        bottomItem.style.cursor = 'grab';
      }
    }, 50);
  
    setActiveId(null);
    setDragging(false);
  
    // ✅ FULL Reset of Drop Zones and SortableContext
    setTimeout(() => {
      console.log("🔄 FORCING FULL Reset of Drop Zones and SortableContext...");
      setDroppedItems(prev => [...prev]);
      setItems(prev => [...prev]); // ✅ Ensure full re-render
  
      // ✅ Force SortableContext to reset
      setSortableKey(prev => prev + 1);
    }, 200);
  };
  
// Add a function to handle checkbox changes
const handleOptionChange = (itemId: string, option: string, checked: boolean) => {
  console.log(`Checkbox changed: ${itemId}, option: ${option}, checked: ${checked}`);
  // Update items if the item is in the bottom section
  setItems(prevItems => 
    prevItems.map(item => 
      item.id === itemId 
        ? { 
            ...item, 
            checkedOptions: { 
              ...item.checkedOptions, 
              [option]: checked 
            } 
          }
        : item
    )
  );
  
  // Update droppedItems if the item is in the top section
  setDroppedItems(prevItems => 
    prevItems.map(item => 
      item.id === itemId 
        ? { 
            ...item, 
            checkedOptions: { 
              ...item.checkedOptions, 
              [option]: checked 
            } 
          }
        : item
    )
  );
  
  // Save the updated state to the database
  handleSaveCheckout();
};
  
  
  const observerRef = useRef<MutationObserver | null>(null);

  const renderCount = useRef(0); // Track how many times it runs

  useEffect(() => {
    if (!isCheckoutEditing) return;
  
    renderCount.current += 1;
    console.log(`🔁 useEffect executed ${renderCount.current} times`);
  
    const dropZones = document.querySelectorAll('[data-droppable-id]');
    dropZones.forEach(zone => {
      zone.setAttribute('data-droppable', 'true');
      zone.setAttribute('data-type', 'container');
    });
  
  }, [isCheckoutEditing]);
  
  
  
  

  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    console.log("🔄 Drop zones reloaded due to dragging state");
  }, [dragging]);


  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch(`${API_URL}/profiles`);
      if (!response.ok) {
        throw new Error("Failed to fetch profiles.");
      }
  
      const data = await response.json();
  
      let profileMap: {
        [key: string]: { description: string; images: { src: string; alt: string }[], uploadedFileName?: string };
      } = {};
  
      data.forEach((profile: Profile) => {
        profileMap[profile.name] = {
          description: profile.description || "",
          images: profile.images && Array.isArray(profile.images)
            ? profile.images.map(img => 
                typeof img === "string" 
                  ? { src: img, alt: "Uploaded image" } 
                  : img) 
            : [],
          uploadedFileName: profile.uploadedFileName || "",
        };
      });
  
      setProfiles(data);
      setProfileData(profileMap);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };
  
  

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);
  const toggleAbout = () => {
    if (!selectedProfile) return;
    setShowAbout(!showAbout);
  };


  const addProfile = async () => {
    let profileName = prompt("Enter profile name:");
  
    if (!profileName || profileName.trim() === "") {
      alert("Profile name cannot be empty.");
      return;
    }
  
    profileName = profileName.trim();
  
    if (profiles.some((profile) => profile.name.toLowerCase() === profileName.toLowerCase())) {
      alert("Profile name already exists! Choose a different name.");
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/profiles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: profileName, description: "", images: [] }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error || "Failed to create profile.");
      }
  
      const newProfile = await response.json();
      setProfiles([...profiles, newProfile]);
  
      // Initialize profile data
      setProfileData((prev) => ({
        ...prev,
        [newProfile.name]: { description: "", images: [] },
      }));
    } catch (error: unknown) {
      console.error("Error adding profile:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };
  
  
  const deleteProfile = async (profileName: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the profile: ${profileName}?`);
    if (!confirmDelete) {
      return; // Cancel deletion if user clicks "Cancel"
    }
  
    try {
      await fetch(`${API_URL}/profiles/${profileName}`, { method: "DELETE" });
      setProfiles(profiles.filter((profile) => profile.name !== profileName));
      setSelectedProfile(null);
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };
  
  const convertImageToBase64 = async (imageUrl: string): Promise<string> => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error converting image to Base64:", error);
      return "";
    }
  };
  
  let formattedHtml = "";

  const turndownService = new TurndownService();
  turndownService.addRule("list", {
    filter: ["ul", "ol"],
    replacement: function (content: string, node: Node) {
      return (node as HTMLElement).outerHTML; // ✅ Typecast `node` as `HTMLElement`
    },
  });
  
  
/* Function to handle file uploads */
const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!selectedProfile) return;

  const file = event.target.files?.[0];
  if (!file) return;

  const fileName = file.name;

  // ✅ Store the file name (avoid unnecessary re-renders)
  setProfileData((prevData) => ({
    ...prevData,
    [selectedProfile]: {
      ...prevData[selectedProfile],
      uploadedFileName: fileName,
    },
  }));

  const reader = new FileReader();

  if (file.type === "text/plain") {
    reader.onload = (e) => {
      if (e.target?.result) {
        const uploadedText = e.target.result.toString().trim();
        console.log("Extracted Text Content:", uploadedText);
        setUploadedText(uploadedText);
        autoSaveToDatabase(uploadedText, uploadedImages);
      }
    };
    reader.readAsText(file);
  } else if (file.name.endsWith(".docx")) {
    reader.onload = async (e) => {
      if (e.target?.result instanceof ArrayBuffer) {
        try {
          let formattedHtml = "";

          // ✅ Extract HTML using `mammoth.convertToHtml()`
          const mammothResult = await mammoth.convertToHtml({ arrayBuffer: e.target.result });
          let extractedHtml = mammothResult.value.trim();

          console.log("Mammoth Extracted Content (With Lists):", extractedHtml);

          // ✅ Preserve bullet points & numbered lists properly
          formattedHtml = extractedHtml
            .replace(/<p>\s*•\s*/g, "<ul><li>") // Fix unordered lists
            .replace(/<p>\s*\d+\.\s*/g, "<ol><li>") // Fix ordered lists
            .replace(/<\/p>\s*<p>/g, "</li><li>") // Ensure list items are correctly wrapped
            .replace(/<\/p>/g, "</li></ul>") // Close unordered lists properly
            .replace(/<\/ol><\/li>/g, "</ol>") // Close ordered lists properly
            .replace(/<\/li><\/ul>(?!<\/li>)/g, "</ul>"); // Remove misaligned list endings

          console.log("Final Processed HTML (Fixed Lists):", formattedHtml);

          // ✅ Process `docx-preview` but DO NOT append it to the UI
          const docxContainer = document.createElement("div");
          await renderAsync(e.target.result, docxContainer);

          // ✅ Extract only relevant content, ignoring `docx-preview` elements
          const extractedBodyContent = docxContainer.querySelector("article")?.innerHTML || "";

          // ✅ Ensure we use the most structured version
          formattedHtml = extractedBodyContent.includes(formattedHtml)
            ? extractedBodyContent
            : extractedBodyContent || formattedHtml;

          // ✅ Remove `docx-preview` elements BEFORE storing content
          const tempContainer = document.createElement("div");
          tempContainer.innerHTML = formattedHtml;
          tempContainer.querySelectorAll("section.docx, .docx-wrapper").forEach((el) => el.remove());
          formattedHtml = tempContainer.innerHTML.trim();

          // ✅ Ensure proper table & list styling
          formattedHtml = formattedHtml
            .replace(/<table/g, '<table style="border-collapse: collapse; width: 100%; border: 1px solid black;"') 
            .replace(/<td/g, '<td style="padding: 8px; border: 1px solid black;"') 
            .replace(/<ul/g, '<ul style="padding-left: 20px; list-style-type: disc; margin-top: 10px; margin-bottom: 10px;"') 
            .replace(/<ol/g, '<ol style="padding-left: 20px; list-style-type: decimal; margin-top: 10px; margin-bottom: 10px;"') 
            .replace(/<li/g, '<li style="margin-bottom: 5px;"'); // ✅ Ensure list items have proper spacing

          // ✅ Remove incorrect `<li>` wrapping on normal text
          formattedHtml = formattedHtml.replace(/<li><strong>/g, "<p><strong>").replace(/<\/strong><\/li>/g, "</strong></p>");

          // ✅ Extract images & convert to Base64
          const extractedImages = await Promise.all(
            Array.from(docxContainer.querySelectorAll("img")).map(async (img) => {
              const base64Image = await convertImageToBase64(img.src);
              return { src: base64Image, alt: img.alt || "Uploaded image" };
            })
          );

          // ✅ Store only cleaned & formatted content without `docx-preview`
          setUploadedText(formattedHtml.trim());
          setUploadedImages(extractedImages);
          autoSaveToDatabase(formattedHtml.trim(), extractedImages);

          // ✅ Remove `docx-preview` from the DOM after processing
          document.querySelectorAll("section.docx, .docx-wrapper").forEach((el) => el.remove());
        } catch (error) {
          console.error("Error processing .docx:", error);
        }
      }
    };
    reader.readAsArrayBuffer(file);
  } else if (file.type.startsWith("image/")) {
    reader.onload = (e) => {
      if (e.target?.result) {
        const base64Image = e.target.result.toString();
        const newImage = { src: base64Image, alt: "Uploaded image" };

        setUploadedImages((prevImages) => [...prevImages, newImage]);
        autoSaveToDatabase(uploadedText, [...uploadedImages, newImage]);
      }
    };
    reader.readAsDataURL(file);
  } else {
    alert("Invalid file type. Please upload a .txt, .docx, or an image file.");
  }
};





/* ✅ Function to Start Editing */
const startEditing = () => {
  if (!selectedProfile) return;
  
  setTempDescription(profileData[selectedProfile]?.description || "");
  setIsEditing(true);

  if (editor) {
      editor.commands.setContent(profileData[selectedProfile]?.description || "");
  }
};


/* ✅ Function to Save Edited Description */
const saveEditedDescription = async () => {
  if (!selectedProfile) return;

  const formattedText = editor?.getHTML() || "";

  try {
    await fetch(`${API_URL}/profiles/${selectedProfile}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: formattedText,
        images: uploadedImages, // ✅ Save updated images
        uploadedFileName: profileData[selectedProfile]?.uploadedFileName || "",
      }),
    });

    // ✅ Update profileData to reflect saved changes
    setProfileData((prevData) => ({
      ...prevData,
      [selectedProfile]: {
        description: formattedText,
        images: uploadedImages, // ✅ Store updated images in state
        uploadedFileName: profileData[selectedProfile]?.uploadedFileName || "",
      },
    }));

    setIsEditing(false);
  } catch (error) {
    console.error("Error saving description:", error);
  }
};



const removeImage = (index: number) => {
  if (!selectedProfile || !isEditing) return; // ✅ Ensure we're in edit mode

  setProfileData((prevData) => {
    const updatedImages = (prevData[selectedProfile]?.images || []).filter((_, i) => i !== index);

    return {
      ...prevData,
      [selectedProfile]: {
        ...prevData[selectedProfile],
        images: updatedImages,
      },
    };
  });

  // ✅ Temporarily update images during editing
  setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
};






/* ✅ Sanitize Extracted HTML */
/* ✅ Sanitize Extracted HTML */
const sanitizeHTML = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // ✅ Ensure lists (`<ul>`, `<ol>`, `<li>`) are preserved
  doc.querySelectorAll("p:empty, div:empty").forEach((node) => node.remove());
  doc.querySelectorAll("br").forEach((node) => node.remove());

  // ✅ Log extracted HTML to verify if lists exist before rendering
  console.log("Sanitized HTML Output:", doc.body.innerHTML);

  return doc.body.innerHTML;
};


/* Save to File */
const saveToFile = (format = "txt") => {
  if (!uploadedText) {
    alert("No content to save.");
    return;
  }

  if (!selectedProfile) {
    alert("No profile selected.");
    return;
  }

  const sanitizedProfileName = selectedProfile.replace(/[^a-zA-Z0-9_-]/g, "");
  const readableText = convertHtmlToPlainText(uploadedText); // ✅ Convert HTML to plain text

  if (format === "txt") {
    const element = document.createElement("a");
    const file = new Blob([readableText], { type: "text/plain" }); // ✅ Save as plain text
    element.href = URL.createObjectURL(file);
    element.download = `${sanitizedProfileName}_Specifications.txt`;
    document.body.appendChild(element);
    element.click();
  } else if (format === "docx") {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: readableText.split("\n").map(line => new Paragraph(line)), // ✅ Split into paragraphs
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${sanitizedProfileName}_Specifications.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
};

const cancelEditing = () => {
  setIsEditing(false);
};

const autoSaveToDatabase = async (text: string, images: { src: string; alt: string }[]) => {
  if (!selectedProfile) {
    alert("No profile selected.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/profiles/${selectedProfile}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: text,
        images: images.map(img => img.src), // ✅ Ensure only the src is saved
        uploadedFileName: profileData[selectedProfile]?.uploadedFileName || "",
      }),
    });

    if (response.ok) {
      console.log("Profile updated automatically.");
    } else {
      console.error("Error saving profile.");
    }
  } catch (error) {
    console.error("Error saving profile:", error);
  }
};


const convertHtmlToPlainText = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      bulletList: false, // ✅ Disable default list handling
      orderedList: false,
    }),
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableCell,
    TableHeader,
    BulletList, // ✅ Enable bullet points
    OrderedList, // ✅ Enable numbered lists
    ListItem,    // ✅ Enable list items
  ],
  content: uploadedText, // Initialize with the uploaded content
  onUpdate: ({ editor }) => setTempDescription(editor.getHTML()), // Update state with editor changes
  editorProps: {
    attributes: {
      class: "prose focus:outline-none",
    },
  },
  immediatelyRender: false, // Fix SSR Hydration Mismatch
});


// Reset editor content when uploadedText changes
useEffect(() => {
  if (editor && uploadedText) {
    editor.commands.setContent(uploadedText); // Dynamically update editor content
  }
}, [uploadedText, editor]);

const handleProfileSelect = (profileName: string) => {
  if (!profileName) return; // Prevent errors

  setSelectedProfile(profileName);
  setShowAbout(false); // Close About Section when switching profiles

  // Ensure images are correctly set and do not become undefined
  const profile = profileData[profileName] || { description: "", images: [], uploadedFileName: "" };

  setUploadedImages(profile.images.length ? profile.images : []); // ✅ Ensure images exist
  setUploadedText(profile.description);
};

const toggleCheckout = () => {
  if (!selectedProfile) return;
  setShowCheckout(!showCheckout);
};

const toggleCheckoutEditMode = () => {
  console.log("Toggling Checkout Edit Mode");
  setIsCheckoutEditing(prev => !prev);
};


const { active } = useDndContext(); // ✅ Get active drag item

// Define droppable state
const { isOver: isOverTop, setNodeRef: topSectionRef } = useDroppable({
  id: "top-section",
  data: {
    type: "container",
    accepts: ["draggable-item"],
    isDropZone: true,
  },
  disabled: false, // Ensure it's always active
});

const { isOver: isOverBottom, setNodeRef: bottomSectionRef } = useDroppable({
  id: "bottom-section",
  data: {
    accepts: ["draggable-item"],
    type: "container"
  }
});

// ✅ Add this after the useDroppable hooks
useEffect(() => {
  console.log("Active Dragging Type:", active?.data?.current?.type);
}, [active]);


// add this state to track the background color, to match checkout section's dynamic background
const [checkoutBgColor, setCheckoutBgColor] = useState('var(--background-color, #ffffff)');

// Add an effect to update the background color when the theme changes
useEffect(() => {
  const updateBackgroundColor = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setCheckoutBgColor(isDarkMode ? 'var(--dark-bg, #1a1a1a)' : 'var(--light-bg, #ffffff)');
  };

  // Initial update
  updateBackgroundColor();

  // Create observer for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateBackgroundColor();
      }
    });
  });

  // Start observing theme changes
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return () => observer.disconnect();
}, []);

const lastValidDropZoneRef = useRef<string | null>(null);

let lastValidDropZone: { id: string } | null = null;

// customCollisionDetection function
// Update collision detection for better sensitivity
// Replace your existing customCollisionDetection with this updated version
const customCollisionDetection: CollisionDetection = (args) => {
  const { collisionRect, droppableContainers } = args;
  const validDropZoneIds = new Set(["top-section", "bottom-section", "1", "2"]);

  // Create expanded collision rect with larger detection area
  const expandedRect = {
    ...collisionRect,
    width: collisionRect.width + 60,    // Increased detection area
    height: collisionRect.height + 60,   
    left: collisionRect.left - 30,      
    right: collisionRect.right + 30,    
    top: collisionRect.top - 30,        
    bottom: collisionRect.bottom + 30    
  };

  return droppableContainers
    .filter(container => validDropZoneIds.has(String(container.id)))
    .map(container => {
      const element = document.querySelector(`[data-droppable-id="${container.id}"]`);
      if (!element) return null;

      const rect = element.getBoundingClientRect();
      const isTopSection = container.id === "top-section" || container.id === "1";
      
      // Add padding for better drop detection
      const adjustedRect = {
        top: rect.top - (isTopSection ? 40 : 20),
        bottom: rect.bottom + (isTopSection ? 40 : 20),
        left: rect.left - (isTopSection ? 40 : 20),
        right: rect.right + (isTopSection ? 40 : 20),
        width: rect.width + (isTopSection ? 80 : 40),
        height: rect.height + (isTopSection ? 80 : 40)
      };

      // More lenient intersection check
      const intersects = (
        expandedRect.left < adjustedRect.right &&
        expandedRect.right > adjustedRect.left &&
        expandedRect.top < adjustedRect.bottom &&
        expandedRect.bottom > adjustedRect.top
      );

      if (!intersects) return null;

      return {
        id: String(container.id),
        data: {
          droppableContainer: {
            id: String(container.id),
            data: {
              type: "container",
              accepts: ["draggable-item"],
              isDropZone: isTopSection
            }
          },
          value: isTopSection ? 2 : 1,
          rect: adjustedRect
        }
      } as CustomCollision;
    })
    .filter((collision): collision is CustomCollision => collision !== null)
    .sort((a, b) => b.data.value - a.data.value);
};

useEffect(() => {
  if (!isCheckoutEditing) return; // Prevent execution if not in edit mode

  console.log("✅ Registering Drop Zones (One-Time)");

  const topSection = document.querySelector('[data-droppable-id="1"]');
  const bottomSection = document.querySelector('[data-droppable-id="2"]');

  if (topSection) {
    topSection.setAttribute('data-droppable', 'true');
    topSection.setAttribute('data-type', 'container');
  }

  if (bottomSection) {
    bottomSection.setAttribute('data-droppable', 'true');
    bottomSection.setAttribute('data-type', 'container');
  }

  console.log("🔍 Found Drop Zones:", topSection, bottomSection);

  return () => {
    console.log("🛑 Cleaning up Drop Zones (Once)");
  };
}, [isCheckoutEditing]);


const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 2,
      tolerance: 5
    },
  })
);


// Update the handleDragEnd function to preserve checkedOptions
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;
  setActiveId(null);
  setDragging(false);

  if (!over) {
    console.log("❌ No valid drop target detected");
    return;
  }

  const dropZoneId = String(over.id);
  const draggedItemId = String(active.id);

  console.log(`🛠️ Handling drop of item ${draggedItemId} into zone ${dropZoneId}`);

  const draggedItem = items.find(item => item.id === draggedItemId) || 
                     droppedItems.find(item => item.id === draggedItemId);

  if (!draggedItem) {
    console.log("❌ Dragged item not found");
    return;
  }

  const isTopSection = dropZoneId === "top-section" || dropZoneId === "1";
  const isBottomSection = dropZoneId === "bottom-section" || dropZoneId === "2";


// Preserve checkedOptions when moving between sections
setDroppedItems(prevDroppedItems => {
  const alreadyInTop = prevDroppedItems.some(item => item.id === draggedItemId);

  if (isTopSection && !alreadyInTop) {
    console.log(`✅ Adding item ${draggedItemId} to top section`);
    return [...prevDroppedItems, { 
      ...draggedItem, 
      isDropped: true,
      // Preserve checked options
      checkedOptions: draggedItem.checkedOptions || {}
      }];
    } 
    
    if (isBottomSection) {
      console.log(`✅ Removing item ${draggedItemId} from top section`);
      return prevDroppedItems.filter(item => item.id !== draggedItemId);
    }

    return prevDroppedItems;
  });

  setItems(prevItems => {
    const updatedItems = prevItems.map(item =>
      item.id === draggedItemId ? { 
        ...item, 
        isDropped: isTopSection,
        // Preserve checked options
        checkedOptions: draggedItem.checkedOptions || {}
      } : item
    );
    console.log("✅ Updated items after drop:", updatedItems);
    return [...updatedItems]; // Ensure a new array reference for reactivity
  });

  // After updating state, save the checkout items to the database
  setTimeout(() => {
    handleSaveCheckout();
  }, 200);

  // Rest of the function remains the same...
  setTimeout(() => {
    console.log("🔄 FORCING FULL Reset of Drop Zones and SortableContext...");
    setDroppedItems(prev => [...prev]);
    setItems(prev => [...prev]); // ✅ Ensure full re-render

    // Force SortableContext to reset
    setSortableKey(prev => prev + 1);
  }, 200);
};

// Finally, modify the "Start Test" button handler to only test checked options
// Update the Start Test button click handler
const handleStartTest = () => {
  console.log("🚀 Start Test button clicked");
  
  // Check if droppedItems is empty
  if (droppedItems.length === 0) {
    console.warn("⚠️ No items in droppedItems, CheckoutTestProgress won't render");
    alert("Please add components to the checkout section before starting the test.");
    return;
  }
  
// Filter the droppedItems to create a version that only includes checked options
const itemsWithCheckedOptions = droppedItems.map(item => {
  // Get the options that are checked (true in checkedOptions)
  const checkedOptionsList = Object.entries(item.checkedOptions || {})
    .filter(([_, isChecked]) => isChecked)
    .map(([option]) => option);
  
  // If no options are checked, include all options as a fallback
  const optionsToTest = checkedOptionsList.length > 0 
    ? checkedOptionsList 
    : item.options;
  
  // Return a version of the item with only the checked options
  return {
    ...item,
    options: optionsToTest // Replace with only the checked options
  };
});
  
  // Make sure there's at least one item with options to test
  const hasTestableItems = itemsWithCheckedOptions.some(item => item.options.length > 0);
  
  if (!hasTestableItems) {
    alert("Please check at least one option in the checkout section before starting the test.");
    return;
  }
  
  // Store the filtered items for the test window to use
  localStorage.setItem('checkoutTestItems', JSON.stringify(itemsWithCheckedOptions));
  
  // Store a flag in localStorage to signal that the window should be open
  localStorage.setItem('showCheckoutTest', 'true');
  
  // Update the state
  setShowCheckoutTest(true);
  
  // Force a re-render
  setDummyState(prev => !prev);
  
  console.log("CheckoutTest window should now be visible with checked options:", itemsWithCheckedOptions);
};

// Add this to your useEffect hooks section
useEffect(() => {
  // Check localStorage on component mount
  const shouldShowWindow = localStorage.getItem('showCheckoutTest') === 'true';
  
  if (shouldShowWindow) {
    console.log("🔄 Restoring CheckoutTest window from localStorage");
    setShowCheckoutTest(true);
  }
}, []);

// Update handleCloseCheckoutTest to also clear localStorage
const handleCloseCheckoutTest = () => {
  console.log("🔴 Closing checkout test window");
  localStorage.removeItem('showCheckoutTest');
  setShowCheckoutTest(false);
};

// Add new effect to maintain drop zones
const hasUpdatedDropZones = useRef(false); // ✅ Prevent multiple updates

useEffect(() => {
  if (!isCheckoutEditing) return;

  const startTime = performance.now(); // Start time measurement
  console.log("⏳ Starting expensive operation...");

  // Simulating work
  const dropZones = document.querySelectorAll('[data-droppable-id]');
  dropZones.forEach(zone => {
    zone.setAttribute('data-droppable', 'true');
    zone.setAttribute('data-type', 'container');
  });

  const endTime = performance.now(); // End time measurement
  console.log(`⚡ Expensive operation took ${endTime - startTime}ms`);
}, [isCheckoutEditing]);



// Add this useEffect to monitor state changes
useEffect(() => {
  const itemsStatus = items.map(item => ({
    id: item.id,
    isDropped: item.isDropped,
  }));
  console.log('Items status:', itemsStatus);
  console.log('Dropped items:', droppedItems);
}, [items, droppedItems]);

useEffect(() => {
  console.log("🔵 Drop zones mounted:", document.querySelectorAll("[data-droppable]"));

  setTimeout(() => {
    const dropZones = document.querySelectorAll("[data-droppable]");
    console.log("✅ Drop zones found in DOM:", dropZones);

    dropZones.forEach((zone) => {
      console.log("📍 Drop Zone Element:", zone);
      console.log("👉 Attributes:", zone.attributes);
      console.log("📏 Bounding Rect:", zone.getBoundingClientRect());
    });
  }, 500); // Delay ensures elements are fully rendered

}, []);

useEffect(() => {
  console.log("🔄 Drop zones reloaded. Current drop zones:", document.querySelectorAll("[data-droppable]"));
}, []);

useEffect(() => {
  document.querySelectorAll("[data-droppable]").forEach((el) =>
    console.log("🔍 Found Drop Zone ID:", el.id)
  );
}, []);

useEffect(() => {
  document.querySelectorAll("[data-droppable]").forEach((el) =>
    console.log("✅ Drop Zone Element ID:", el.id)
  );
}, []);

const [, setRender] = useState(false);

useEffect(() => {
  setTimeout(() => {
    console.log("✅ Forcing a re-render to ensure drop zones exist.");
    setRender(prev => !prev); // Toggle state to trigger re-render
  }, 100);
}, []);

useEffect(() => {
  console.log("🛠️ isCheckoutEditing changed:", isCheckoutEditing);
}, [isCheckoutEditing]);

// Update dropZoneStyle
const dropZoneStyle: React.CSSProperties = {
  minHeight: "250px",
  width: "100%",
  padding: "20px",
  boxSizing: "border-box",
  border: isOverTop ? "2px solid #2196F3" : "2px dashed #ccc",
  backgroundColor: isOverTop ? "rgba(33, 150, 243, 0.1)" : "transparent",
  position: "relative",
  zIndex: 1,
  touchAction: "none",
  userSelect: "none" as const,
  overflow: "visible"
};

// Update the handleSaveCheckout function to save the checked options state
const handleSaveCheckout = async () => {
  if (!selectedProfile) {
    console.log("❌ No active profile selected");
    return;
  }

  try {
    console.log("💾 Saving checkout items with checkbox states:", droppedItems);
    
    const response = await fetch(`${API_URL}/checkout/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile_id: selectedProfile,
        items: droppedItems, // Now includes checkedOptions
      }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log(`✅ Checkout items saved for profile ${selectedProfile}:`, result);
  } catch (error) {
    console.error("❌ Error saving checkout items:", error);
  }
};


const handleCancelCheckout = async () => {
  if (!selectedProfile) {
    console.log("❌ No active profile selected");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/checkout/load/${selectedProfile}`);
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    setDroppedItems(result.items);
    console.log(`🔄 Restored checkout items for profile ${selectedProfile}:`, result.items);
  } catch (error) {
    console.error("❌ Error loading previous checkout items:", error);
  }
};

// Update the handleLoadCheckout function with proper typing
const handleLoadCheckout = async (profileId: string) => {
  try {
    const response = await fetch(`${API_URL}/checkout/load/${profileId}`);
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.items && Array.isArray(result.items)) {
      // Ensure each item has a checkedOptions object
      const loadedItems = result.items.map((item: any) => ({
        ...item,
        checkedOptions: item.checkedOptions || {},
      }));
      
      setDroppedItems(loadedItems);
      
      // Update the items array to reflect the dropped state of the loaded items
      setItems(prevItems => {
        return prevItems.map(item => {
          // Fix: Add proper type for the 'loaded' parameter
          const loadedItem = loadedItems.find((loaded: DraggableItem) => loaded.id === item.id);
          if (loadedItem) {
            return {
              ...item,
              isDropped: true,
              checkedOptions: loadedItem.checkedOptions || {}
            };
          }
          return item;
        });
      });
      
      console.log(`✅ Loaded checkout items for profile ${profileId}:`, loadedItems);
    } else {
      console.log(`ℹ️ No saved checkout items found for profile ${profileId}`);
      setDroppedItems([]);
    }
  } catch (error) {
    console.error("❌ Error loading checkout items for profile:", error);
    setDroppedItems([]);
  }
};

// Update the profile change handler to load checkout items with their checkbox states
const handleProfileChange = async (profileId: string) => {
  console.log(`🔄 Profile changed: ${profileId}`);
  setSelectedProfile(profileId);
  await handleLoadCheckout(profileId);
};

useEffect(() => {
  if (selectedProfile) {
    handleProfileChange(selectedProfile); // ✅ Load saved checkout items when profile changes
  }
}, [selectedProfile]);

// Update the useEffect in MainScreen.tsx to better initialize the MCC socket
useEffect(() => {
  if (showCheckoutTest && !mccSocket) {
    // Initialize a simulated MCC socket for testing
    const initMccSocket = async () => {
      try {
        console.log("Attempting to create MCC socket...");
        
        // Force simulation mode for testing purposes
        const socket = await connectToMcc("localhost:8080");
        
        if (socket) {
          setMccSocket(socket);
          console.log("✅ MCC socket initialized for testing");
        } else {
          console.warn("⚠️ Socket is null, using simulation fallback");
          
          // Create a minimal simulation object that implements the necessary methods
          const simulatedSocket = {
            simulateRead: (parameters: string[]) => {
              // Return simulated values for each parameter
              return parameters.map(param => `${param}=simulated`);
            },
            send: async (message: string) => {
              console.log(`[SIM] Sending message: ${message}`);
              return Promise.resolve();
            },
            receive: async () => {
              console.log(`[SIM] Receiving data`);
              return Promise.resolve("simulated response");
            }
          };
          
          setMccSocket(simulatedSocket);
        }
      } catch (error) {
        console.error("❌ Error initializing MCC socket:", error);
        
        // Create a fallback simulation
        const simulatedSocket = {
          simulateRead: (parameters: string[]) => {
            // Return simulated values for each parameter
            return parameters.map(param => `${param}=simulated`);
          },
          send: async (message: string) => {
            console.log(`[SIM] Sending message: ${message}`);
            return Promise.resolve();
          },
          receive: async () => {
            console.log(`[SIM] Receiving data`);
            return Promise.resolve("simulated response");
          }
        };
        
        setMccSocket(simulatedSocket);
      }
    };
    
    initMccSocket();
  }
}, [showCheckoutTest, mccSocket]);

console.log("Rendering MainScreen:");
console.log("showToTestList:", showToTestList);
console.log("showThreeDModelWindow:", showThreeDModelWindow);

useEffect(() => {
  console.log("🔍 Checking if CheckoutTestProgress exists:", !!CheckoutTestProgress);
  if (!CheckoutTestProgress) {
    console.error("❌ CheckoutTestProgress component is undefined!");
  }
}, []);

// Initialize mccSocket once on component mount instead of waiting
useEffect(() => {
  // Create a simple simulated socket if it doesn't exist yet
  if (!mccSocket) {
    console.log("🔄 Pre-initializing simulated MCC socket");
    
    // Create a simple simulated socket for testing
    const simulatedSocket = {
      simulateRead: (parameters: string[]) => {
        return parameters.map(param => {
          // Generate simulated values for common parameters
          if (param.includes("FW_Ver")) {
            const version = param.includes("Major") ? "1" : 
                          param.includes("Minor") ? "2" : "3";
            return `${param}=${version}`;
          } else if (param.includes("3V3") || param.includes("5V")) {
            // Voltage values in mV
            return `${param}=${3300 + Math.floor(Math.random() * 100)}`;
          } else if (param.includes("temp") || param.includes("Temp")) {
            // Temperature values
            return `${param}=${20 + Math.floor(Math.random() * 10)}`;
          } else if (param.includes("eMMC")) {
            return `${param}=1`;
          } else {
            return `${param}=simulated`;
          }
        });
      },
      send: async (message: string) => {
        console.log(`[SIM] Sending: ${message}`);
        return Promise.resolve();
      },
      receive: async () => {
        return Promise.resolve("simulated response");
      }
    };
    
    setMccSocket(simulatedSocket);
  }
}, [mccSocket]);

useEffect(() => {

  setSimulationMode(false);
}, []);

useEffect(() => {
  // Attempt to retrieve the socket info
  const socketInfoStr = localStorage.getItem('mccSocketInfo');
  if (socketInfoStr) {
    try {
      const socketInfo = JSON.parse(socketInfoStr);
      if (socketInfo.isReal && socketInfo.address) {
        console.log(`Reconnecting to real MCC server at ${socketInfo.address}`);
        
        // Create a real socket connection
        connectToMcc(socketInfo.address)
          .then(socket => {
            if (socket) {
              console.log("✅ Successfully reconnected to real MCC server");
              setMccSocket(socket);
            }
          })
          .catch(err => {
            console.error("❌ Failed to reconnect to MCC server:", err);
          });
      }
    } catch (error) {
      console.error("Error parsing socket info:", error);
    }
  }
}, []);

return (
  <div className={styles.mainScreen}>
    {!isSidebarOpen && (
      <button
        className={styles.retractExpandSidebarButton}
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
    )}

    <div className={`${styles.sidebar} ${isSidebarOpen ? "" : styles.hidden}`}>
      <div className={styles.sidebarHeader}>
        <span>Menu</span>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem} onClick={() => setSelectedProfile(null)}>
          Home
        </li>
{/* Focused visibility fix for Tests to Conduct button */}
<li 
  className={styles.menuItem} 
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("🔍 Focused visibility fix initiated");
    
    // Toggle the window
    if (showToTestList) {
      console.log("Closing ToTestList");
      closeToTestList();
    } else {
      console.log("Opening ToTestList and bringing to front");
      openToTestList();
      
      // Ensure window is visible and positioned correctly
      setTimeout(() => {
        const toTestListWindow = document.querySelector('[data-window="ToTestList"]');
        if (toTestListWindow) {
          console.log("ToTestList found, ensuring visibility and position");
          
          // Ensure the window is visible
          (toTestListWindow as HTMLElement).style.visibility = 'visible';
          (toTestListWindow as HTMLElement).style.display = 'block';
          (toTestListWindow as HTMLElement).style.opacity = '1';
          
          // Bring to front
          bringWindowToFront("ToTestList");
          
          // Force position to center if it's off-screen
          const windowRect = toTestListWindow.getBoundingClientRect();
          if (windowRect.left < 0 || windowRect.top < 0 || 
              windowRect.right > window.innerWidth || windowRect.bottom > window.innerHeight) {
            console.log("Window appears to be off-screen, centering it");
            
            // Try to set position through sessionStorage
            try {
              const centerPosition = {
                x: (window.innerWidth - 800) / 2, 
                y: (window.innerHeight - 500) / 2
              };
              sessionStorage.setItem('toTestListPosition', JSON.stringify(centerPosition));
              console.log("Set centered position:", centerPosition);
              
              // Attempt to force position directly
              const draggableElement = toTestListWindow.querySelector('[style*="transform"]');
              if (draggableElement) {
                (draggableElement as HTMLElement).style.transform = 
                  `translate(${centerPosition.x}px, ${centerPosition.y}px)`;
              }
              
              // Last resort: reload the page
              window.location.reload();
            } catch (error) {
              console.error("Error centering window:", error);
            }
          }
        }
      }, 100);
    }
  }}
>
  Tests to Conduct
</li>
        <li className={styles.menuItem}>
          <div className={styles.profileContainer}>
            <button
              className={styles.profilesButton}
              onClick={toggleProfileDropdown}
            >
              Profiles
            </button>
            <div className={styles.profileButtonGroup}>
              <button
                className={styles.dropdownButton}
                onClick={toggleProfileDropdown}
              >
                {isProfileDropdownOpen ? "▲" : "▼"}
              </button>
              <button
                className={styles.addProfileButton}
                onClick={addProfile}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </li>
        {isProfileDropdownOpen && (
          <ul className={styles.profileDropdown}>
          {profiles.map((profile) => (
            <li
              key={profile.id || profile.name}
              className={styles.profileSidebarItem}
              onClick={() => {
                handleProfileChange(profile.name); // ✅ Ensure checkout items load per profile
              }}
            >
              {profile.name}
            </li>
          ))}
        </ul>
        
        )}
      </ul>
      <div className={styles.settingsContainer}>
        <button className={styles.settingsButton}>
          <FaCog />
        </button>
      </div>
    </div>

    <div className={styles.content}>
      {selectedProfile ? (
        <div className={styles.profilePage}>
          <div className={styles.profileHeading}>
            <h1>{selectedProfile}</h1>
            <button
              className={styles.deleteButton}
              onClick={() => deleteProfile(selectedProfile)}
            >
              <FaTrash />
            </button>
          </div>

          {/* ✅ About/Specifications Button Below Profile Name */}
          <button className={styles.aboutButton} onClick={toggleAbout}>
            <FaInfoCircle /> About/Specifications
          </button>

          {/* ✅ Show/Hide About Section */}
          {showAbout && (
            <div
              className={`${styles.aboutSection} ${
                document.documentElement.classList.contains("dark")
                  ? styles.darkMode
                  : ""
              }`}
            >
              {/* ✅ Editing Mode: Use Tiptap Rich Text Editor */}
              {isEditing ? (
                <>
                  {/* ✅ Add Toolbar for Lists */}
                  <div className="toolbar">
                    <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>
                      Bullet List
                    </button>
                    <button onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
                      Ordered List
                    </button>
                  </div>

                  <EditorContent editor={editor} className={styles.richTextEditor} />

                  {/* ✅ Show all images outside the editor */}
                  {uploadedImages.length > 0 ? (
                    <div className={styles.imageContainer}>
                      {uploadedImages.map((image, index) => (
                        <div key={index} className={styles.imageWrapper}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={styles.uploadedImage}
                          />
                          {/* ✅ Remove button only renders in editing mode */}
                          <button
                            className={styles.removeImageButton}
                            onClick={() => removeImage(index)}
                          >
                            ✖
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className={styles.imagePlaceholder}>No images uploaded</p>
                  )}

                  {/* ✅ File Upload Section (Only in Editing Mode) */}
                  <div className={styles.uploadContainer}>
                    <input
                      type="file"
                      accept=".txt, .docx"
                      onChange={handleFileUpload}
                      className={styles.uploadInput}
                    />
                    {/* ✅ Show file name specific to the selected profile */}
                    {selectedProfile &&
                      profileData[selectedProfile]?.uploadedFileName && (
                        <p>Uploaded: {profileData[selectedProfile].uploadedFileName}</p>
                      )}
                  </div>
                </>
              ) : (
                /* ✅ Normal Mode: Display Formatted Content */
                <>
                  <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(profileData[selectedProfile]?.description || "<p>No description available.</p>"),
                      }}
                  />
                  {/* ✅ Show all images outside the editor */}
                  {profileData[selectedProfile]?.images.length > 0 && (
                    <div className={styles.imageContainer}>
                      {selectedProfile && profileData[selectedProfile]?.images.map((image: { src: string; alt: string }, index: number) => (
                        <div key={index} className={styles.imageWrapper}>
                          <img 
                             src={image.src} 
                             alt={image.alt} 
                             className={styles.uploadedImage}
                             onError={(e) => e.currentTarget.src = "/fallback-image.png"} // Provide a fallback image
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* ✅ Save, Edit, and Download Buttons */}
                <div className={styles.actionButtons}>
                  {!isEditing && (
                    <>
                      <button
                        onClick={() => saveToFile("txt")}
                        className={styles.downloadButton}
                      >
                        <FaDownload /> Save as .TXT
                      </button>
                      <button
                        onClick={() => saveToFile("docx")}
                        className={styles.downloadButton}
                      >
                        <FaDownload /> Save as .DOCX
                      </button>
                    </>
                  )}
                  {isEditing ? (
                    <>
                      <button
                        onClick={saveEditedDescription}
                        className={styles.saveButton}
                      >
                        <FaCheck /> Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className={styles.cancelButton}
                      >
                        <FaTimes /> Cancel
                      </button>
                    </>
                  ) : (
                    <button className={styles.editButton} onClick={startEditing}>
                      <FaEdit />
                    </button>
                  )}
                </div>
              </div>
            )}

              {/* ✅ Test Type & Checkout Button Located Outside About Section */}
              <h2 className={styles.testTypeHeader}>Test Type</h2>
              <button className={styles.checkoutButton} onClick={toggleCheckout}>
                <FaWrench /> Checkout
              </button>
   
 
              {showCheckout && (
                <div className={styles.checkoutSection}
                  style={{
                    backgroundColor: checkoutBgColor,
                    transition: 'background-color 0.3s ease',
                  }}
                >

{(() => { console.log("🔄 Checkout Section Re-rendered"); return null; })()}

                <div className={styles.checkoutHeader} style={{ display: 'flex', alignItems: 'center' }}>
                  <h3 style={{ marginRight: '10px' }}>Test Selection:</h3>
                  <button className={styles.editButton} onClick={toggleCheckoutEditMode}>
                    <FaEdit />
                  </button>
        
                  {!isCheckoutEditing && (
  <button 
    className={styles.startTestButton} 
    style={{ marginLeft: 'auto' }}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Ensure we have items to test
      if (droppedItems.length === 0) {
        alert("Please add components to the checkout section before starting the test.");
        return;
      }
      
      // Store a flag in localStorage to ensure window stays visible
      localStorage.setItem('showCheckoutTest', 'true');
      
      // Ensure we have a socket ready
      if (!mccSocket) {
        // Initialize a simulated socket
        const simSocket = {
          simulateRead: (params: string[]) => params.map(p => `${p}=simulated`),
          send: async () => Promise.resolve(),
          receive: async () => Promise.resolve("simulated")
        };
        setMccSocket(simSocket);
      }
      
      // Set window visible
      setShowCheckoutTest(true);
      
      // Force re-render
      setDummyState(prev => !prev);
      
      console.log("🚀 CheckoutTest window activated");
    }}
  >
    <FaPlay /> Start Test
  </button>
)}
                </div>

                <DndContext
  sensors={sensors}
  collisionDetection={customCollisionDetection}
  onDragStart={({ active }) => {
    setActiveId(String(active.id));
    setDragging(true);
  }}
  onDragEnd={handleDragEnd}
  onDragCancel={() => {
    setActiveId(null);
    setDragging(false);
  }}
>
  {/* Top Section Drop Zone */}
  <div
  key="top-section"
  ref={topSectionRef}
  id="top-section"
  data-id="1"
  data-droppable="true"
  data-droppable-id="1"
  data-type="container"
  className={`${styles.topSection} dropZoneArea ${isOverTop ? "isOver" : ""}`}
  data-is-over={isOverTop ? "true" : "false"}
  style={dropZoneStyle}
>
    {droppedItems.length === 0 && isCheckoutEditing && (
      <div style={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)",
        color: "#666",
        fontStyle: "italic"
      }}>
        Drop items here
      </div>
    )}
<SortableContext key={sortableKey} items={droppedItems} strategy={verticalListSortingStrategy}>
  {droppedItems.map((item) => (
    <div key={`top-${item.id}`} className={styles.droppableBox} style={{ position: 'relative', overflow: 'visible' }}>
      <DraggableBox 
        id={item.id}
        header={item.header}
        options={item.options}
        data={{ type: "draggable-item" }}
        isDropped={true}
        removeDroppedItem={removeDroppedItem}
        isCheckoutEditing={isCheckoutEditing}
        checkedOptions={item.checkedOptions} // Pass checked state
        onOptionChange={handleOptionChange} // Pass handler
      />
    </div>
  ))}
</SortableContext>
  </div>

  {/* Bottom Section */}
  {isCheckoutEditing && (
    <div
    ref={bottomSectionRef}
    id="bottom-section"
    data-id="2"
    data-droppable="true"
    data-droppable-id="2"
    data-type="container"
    data-current='{"type": "container"}'
    className={styles.bottomSection}
    style={{
      minHeight: "200px",
      padding: "20px",
      position: "relative",
      border: isOverBottom ? "2px solid #2196F3" : "2px dashed #ccc",
      backgroundColor: isOverBottom ? "rgba(33, 150, 243, 0.1)" : "transparent",
      touchAction: "none",
      userSelect: "none",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
      pointerEvents: "auto"  // Add this to ensure dragging works
    }}
  >
  <h4>Available Components</h4>
  <SortableContext key={sortableKey} items={items} strategy={verticalListSortingStrategy}>

  {items.map((item) => {
  const isInTopSection = droppedItems.some(droppedItem => droppedItem.id === item.id);
  return (
    <div
      key={`bottom-${item.id}`}
      className={styles.dragItem}
      data-draggable-id={item.id}
      data-dropped={isInTopSection ? "true" : "false"}
      style={{
        opacity: isInTopSection ? 0.3 : 1,
        pointerEvents: isInTopSection ? 'none' : 'auto',
        cursor: isInTopSection ? 'not-allowed' : 'grab'
      }}
    >
      <DraggableBox
        id={item.id}
        header={item.header}
        options={item.options}
        data={{ type: "draggable-item" }}
        isDropped={isInTopSection}
        isInBottomSection={true} // ✅ Ensure it knows it's in the bottom section
        checkedOptions={item.checkedOptions} // Pass checked state
        onOptionChange={handleOptionChange} // Pass handler
      />
    </div>
  );
})}
</SortableContext>
</div>
  )}

<DragOverlay>
  {activeId ? (
    <DraggableBox
      id={activeId}
      header={(items.find(item => item.id === activeId) || droppedItems.find(item => item.id === activeId))?.header || ""}
      options={(items.find(item => item.id === activeId) || droppedItems.find(item => item.id === activeId))?.options || []}
      data={{ type: "draggable-item" }} // ✅ Ensure this is added
    />
  ) : null}
</DragOverlay>

</DndContext>

              {isCheckoutEditing && (
                <div className={styles.editModeButtons}>
<button className={styles.saveButton} onClick={() => {
                      handleSaveCheckout();
                      toggleCheckoutEditMode(); // ✅ Exit edit mode after saving
                  }}>
                    <FaCheck /> Save
                  </button>
                  <button className={styles.cancelButton} onClick={() => {
                      handleCancelCheckout();
                      toggleCheckoutEditMode(); // ✅ Exit edit mode after canceling
                  }}>
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>
          )}
          <h2 className={styles.ThreeDModelViewerHeader}>Satellite Model Viewer</h2>
{/* ✅ Open the 3D Model Viewer for the selected profile */}
<button
  className={styles.threeDModelButton}
  onClick={(e) => {
    e.preventDefault();
    console.log("🔘 3D Model button clicked");
    
    // Find the profile to get its ID
    const profile = profiles.find((p) => p.name === selectedProfile);
    const profileId = profile?.id || 1;
    
    console.log(`📱 Opening 3D Model window for profile ID: ${profileId}`);
    
    // Ensure any pending state updates are completed first
    setTimeout(() => {
      // Call the openModelWindow function provided through props
      openModelWindow(profileId);
      
      // Log the state after opening
      setTimeout(() => {
        console.log("🔍 After 3D Model button click:");
        console.log("- showThreeDModelWindow:", showThreeDModelWindow);
        console.log("- threeDModelProfileId:", threeDModelProfileId);
      }, 100);
    }, 50);
  }}
>
  <FaCube /> 3D Model Viewer
</button>

          </div>
        ) : (
          <div className={styles.profilePage}>
            <h1 className={styles.profileHeading}>Satellite Automated Testing System</h1>
            <p className={styles.profileSubtext}>Navigate using the side panel</p>
          </div>
        )}

{(() => {
    console.log("🔍 Rendering MainScreen component");
    console.log("- showCheckoutTest:", showCheckoutTest);
    console.log("- droppedItems length:", droppedItems.length);
    return null;
  })()}

{(showCheckoutTest || localStorage.getItem('showCheckoutTest') === 'true') && droppedItems.length > 0 && (
  <div id="checkout-test-container" style={{ position: 'relative', zIndex: 9999 }}>
    {(() => {
      console.log("⭐ Rendering CheckoutTestProgress window", {
        showCheckoutTest,
        localStorageValue: localStorage.getItem('showCheckoutTest'),
        droppedItemsLength: droppedItems.length
      });
      return null;
    })()}
    <CheckoutTestProgress
      droppedItems={droppedItems}
      onClose={handleCloseCheckoutTest}
      zIndex={99999}
      onMouseDown={() => {/* Nothing needed here */}}
      sock={mccSocket || {}}
    />
  </div>
)}
      </div>
    </div>
);
}

export default MainScreen;
