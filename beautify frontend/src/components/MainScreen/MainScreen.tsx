import React, { useState, useEffect } from "react";
import styles from "./MainScreen.module.css";
import ToTestList from "../ToTestList/ToTestList";
import { FaBars, FaCog, FaPlus, FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import mammoth from "mammoth"; // Import mammoth for `.docx` extraction, npm install mammoth
import { renderAsync } from "docx-preview"; // npm install docx-preview
import { Document, Packer, Paragraph } from "docx"; // npm install docx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Profile } from 'types/types';


const API_URL = "http://127.0.0.1:5000/profiles"; // Ensure this is correct


const MainScreen: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [showToTestList, setShowToTestList] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [uploadedText, setUploadedText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
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
  


  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch(`${API_URL}`);
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
          images: profile.images?.length ? profile.images : [], // ✅ Ensure images are properly set
          uploadedFileName: profile.uploadedFileName || ""
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
      const response = await fetch(`${API_URL}`, {
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
    try {
      await fetch(`${API_URL}/${profileName}`, { method: "DELETE" });
      setProfiles(profiles.filter((profile) => profile.name !== profileName));
      setSelectedProfile(null);
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

/* Function to handle file uploads */
const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!selectedProfile) return; // Ensure a profile is selected

  const file = event.target.files?.[0];
  if (!file) return;

  const fileName = file.name; // Extract file name

  // ✅ Store the file name for the selected profile
  setProfileData((prevData) => ({
    ...prevData,
    [selectedProfile]: {
      ...prevData[selectedProfile],
      uploadedFileName: fileName, // Save file name
    },
  }));

  const reader = new FileReader();

  if (file.type === "text/plain") {
    reader.onload = (e) => {
      if (e.target?.result) {
        const uploadedText = e.target.result.toString();
        setUploadedText(uploadedText);
        autoSaveToDatabase(uploadedText, uploadedImages);
      }
    };
    reader.readAsText(file);
  } else if (file.name.endsWith(".docx")) {
    reader.onload = async (e) => {
      if (e.target?.result instanceof ArrayBuffer) {
        try {
          const textResult = await mammoth.convertToHtml({ arrayBuffer: e.target.result });
          const docxContainer = document.createElement("div");
          await renderAsync(e.target.result, docxContainer);

          // ✅ Extract all images instead of just the first one
          const extractedImages = Array.from(docxContainer.querySelectorAll("img")).map((img) => ({
            src: img.src,
            alt: img.alt || "Uploaded image",
          }));

          // ✅ Store the full content and all images
          setUploadedText(textResult.value.trim());
          setUploadedImages(extractedImages);
          autoSaveToDatabase(textResult.value.trim(), extractedImages);
        } catch (error) {
          console.error("Error processing .docx:", error);
        }
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    alert("Invalid file type. Please upload a .txt or .docx file.");
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
    await fetch(`${API_URL}/${selectedProfile}`, {
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
const sanitizeHTML = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // ✅ Remove redundant page breaks or empty nodes
  doc.querySelectorAll("p:empty, div:empty").forEach((node) => node.remove());
  doc.querySelectorAll("br").forEach((node) => node.remove());

  // ✅ Return sanitized HTML
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

  const response = await fetch(`http://127.0.0.1:5000/profiles/${selectedProfile}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: text,
      images: images
    })
  });

  if (response.ok) {
    console.log("Profile updated automatically.");
  } else {
    console.error("Error saving profile.");
  }
};

const convertHtmlToPlainText = (html: string): string => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const editor = useEditor({
  extensions: [StarterKit],
  content: uploadedText, // Initialize with the uploaded content
  onUpdate: ({ editor }) => setTempDescription(editor.getHTML()), // Update state with editor changes
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
        <li className={styles.menuItem} onClick={() => setShowToTestList(true)}>
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
                key={profile.id || profile.name} // ✅ Ensure unique key
                className={styles.profileSidebarItem}
                onClick={() => handleProfileSelect(profile.name)}
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

    {showToTestList && <ToTestList onClose={() => setShowToTestList(false)} />}

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
                        __html: profileData[selectedProfile]?.description || "",
                      }}
                  />
                  {/* ✅ Show all images outside the editor */}
                  {uploadedImages.length > 0 && (
                    <div className={styles.imageContainer}>
                        {uploadedImages.map((image, index) => (
                          <div key={index} className={styles.imageWrapper}>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className={styles.uploadedImage}
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
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className={styles.cancelButton}
                      >
                        Cancel
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
          </div>
        ) : (
          <div className={styles.profilePage}>
            <h1 className={styles.profileHeading}>Satellite Automated Testing System</h1>
            <p className={styles.profileSubtext}>Navigate using the side panel</p>
          </div>
        )}
      </div>
    </div>
);
}

export default MainScreen;
