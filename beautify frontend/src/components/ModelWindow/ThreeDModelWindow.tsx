import React, { useEffect, useState, useRef, Suspense } from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./ThreeDModelWindow.module.css";
import { extend, ReactThreeFiber } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { WindowName } from "types/types";


const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000"; // ✅ Ensure correct backend URL

interface ThreeDModelWindowProps {
  onClose: () => void;
  profileId: number;
  zIndex: number; // ✅ Added `zIndex` prop
  onMouseDown: () => void; // ✅ Added `onMouseDown` prop
}

interface SatelliteModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  onColorExtracted?: (color: THREE.Color) => void;
}

const SatelliteModel: React.FC<SatelliteModelProps> = ({ modelPath, scale = 40, position = [0, 0, 0], onColorExtracted }) => {
  if (!modelPath) {
    console.warn("⚠️ No model path provided, showing fallback.");
    return <p className="error-message">⚠️ No model path provided</p>;
  }

  console.log(`🔍 Attempting to load GLTF model from: ${modelPath}`);

  const ref = useRef<THREE.Group | null>(null);
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (gltf.scene && onColorExtracted) {
      const firstMesh = gltf.scene.children.find(
        (obj) => obj instanceof THREE.Mesh
      ) as THREE.Mesh | undefined;
      if (firstMesh && firstMesh.material instanceof THREE.MeshStandardMaterial) {
        const color = new THREE.Color(firstMesh.material.color.getHex());
        onColorExtracted(color);
      }
    }
  }, [gltf, onColorExtracted]);

  // Rotate model slightly over time
  useFrame(() => {
    if (ref.current) {
      (ref.current as THREE.Group).rotation.y += 0.003;
    }
  });
  
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={hovered ? scale * 1.2 : scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export { SatelliteModel };



const ThreeDModelWindow: React.FC<{ 
  profileId: number;
  zIndex: number; 
  onMouseDown: () => void; 
  onClose: () => void;
  bringWindowToFront: (windowName: WindowName) => void;
  windowZIndexes: { [key: string]: number };  // ✅ Accept this prop
  zIndexCounter: number;  // ✅ Accept this prop
}> = ({ profileId, zIndex, onMouseDown, onClose, bringWindowToFront, windowZIndexes, zIndexCounter }) => {
  
  console.log(`ThreeDModelWindow rendering with zIndex: ${zIndex}, profileId: ${profileId}`);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modelPath, setModelPath] = useState<string>(""); // ✅ Always a string
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null!);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [canvasBgColor, setCanvasBgColor] = useState("#ffffff"); // ✅ Only for Canvas background
  const windowRef = useRef<HTMLDivElement>(null); // ✅ Ensure `ref` is initialized
  const [currentZIndex, setCurrentZIndex] = useState(zIndex); // ✅ Track `zIndex`


  // Portal management
  const [portalElement] = useState(() => {
    // Create portal element once
    const element = document.createElement("div");
    element.id = "modelWindow-root";
    document.body.appendChild(element);
    return element;
  });

  useEffect(() => {
    console.log(`📌 Appending ThreeDModelWindow to body`);
    document.body.appendChild(portalElement);
  
    return () => {
      console.log(`🗑️ Removing ThreeDModelWindow from body`);
      if (portalElement && portalElement.parentNode) {
        portalElement.parentNode.removeChild(portalElement);
      }
    };
  }, [portalElement]);
  
  

  useEffect(() => {
    // Check dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    });
    
    // Cleanup portal when component unmounts
    return () => {
      observer.disconnect();
      if (portalElement && portalElement.parentNode) {
        portalElement.parentNode.removeChild(portalElement);
      }
    };
  }, [portalElement]);

  // Fetch model path
  useEffect(() => {
    if (!profileId) return;
    
    const fetchModelPath = async () => {
      try {
        console.log(`Fetching model path for profile ${profileId}`);
        const response = await fetch(`${API_URL}/api/profile/${profileId}`);
        const data = await response.json();
        
        if (data.model_path) {
          // Construct full path
          const fullPath = data.model_path.startsWith('http') 
            ? data.model_path 
            : `${API_URL}${data.model_path}`;
          
          console.log(`Model path: ${fullPath}`);
          setModelPath(fullPath);
          setErrorMessage(null);
        } else {
          console.log('No model path found');
          setModelPath("");
          setErrorMessage("No model file available. Upload a .glb file below.");
        }
      } catch (err) {
        console.error("Error fetching model:", err);
        setModelPath("");
        setErrorMessage("Could not load model information");
      }
    };
    
    fetchModelPath();
  }, [profileId]);
  

  
  // ✅ Handle File Upload
  const handleFileUpload = async () => {
    if (!selectedFile) return;
  
    if (!selectedFile.name.endsWith(".glb")) {
      alert("❌ Invalid file format! Please upload a .glb file.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("profile_id", String(profileId));
  
    try {
      const response = await fetch(`${API_URL}/api/upload-glb`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) throw new Error("❌ Failed to upload model");
  
      const data = await response.json();
      
      if (data.model_path) {
        const fullModelPath = data.model_path.startsWith("http")
  ? data.model_path
  : `${API_URL}${data.model_path}`;  // Ensure full backend path

console.log(`✅ Model uploaded successfully. New path: ${fullModelPath}`);
setModelPath(fullModelPath);

        setErrorMessage(null);
      } else {
        throw new Error("❌ No model path returned from server");
      }
    } catch (error) {
      console.error("❌ Upload Error:", error);
      setErrorMessage("❌ Failed to upload file.");
    }
  };
  
  const windowName = "ThreeDModelWindow";

  // ✅ Handle File Selection
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]); // Store the selected file
    }
  };

  console.log(`🎯 ThreeDModelWindow received zIndex:`, zIndex);

  useEffect(() => {
    if (!windowZIndexes || windowZIndexes["ThreeDModelWindow"] === undefined) {
      console.warn("⚠️ windowZIndexes missing ThreeDModelWindow, using default zIndex.");
      setCurrentZIndex(zIndexCounter); // Fallback to prevent error
    } else {
      setCurrentZIndex(windowZIndexes["ThreeDModelWindow"]);
    }
  }, [windowZIndexes, zIndexCounter]);

    // Log when component mounts or z-index changes
    useEffect(() => {
      console.log(`ThreeDModelWindow rendered with zIndex: ${zIndex}, profileId: ${profileId}`);
    }, [zIndex, profileId]);
  
  // When component mounts, bring it to front
  useEffect(() => {
    if (bringWindowToFront) {
      console.log("Bringing 3D model window to front");
      setTimeout(() => bringWindowToFront("ThreeDModelWindow" as WindowName), 100);
    }
  }, [bringWindowToFront]);

  console.log(`ThreeDModelWindow rendering with zIndex: ${zIndex}, profileId: ${profileId}`);

  return createPortal(
    <Draggable nodeRef={nodeRef} handle=".drag-handle">
      <div 
        ref={nodeRef} 
        className={styles.popup}
        style={{ 
          position: "fixed", 
          zIndex: windowZIndexes["ThreeDModelWindow"] }} // ✅ Dynamic z-index
        onClick={(e) => {
          e.stopPropagation();
          console.log('3D Model window clicked');
          if (onMouseDown) onMouseDown();
        }}
      >
        <div className={`${styles.header} drag-handle`}>
          <h2>Satellite Model Viewer</h2>
          <button
            className={styles.closeButton}
            style={{ color: isDarkMode ? "white" : "black" }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ✖
          </button>
        </div>
        <div className={styles.content}>
          {/* ✅ Show Error Message or 3D Model */}
          {errorMessage ? (
            <p className={styles.errorMessage}>{errorMessage}</p>
          ) : modelPath ? (
<Canvas
              camera={{ position: [5, 5, 10], fov: 50 }}
              style={{ width: "100%", height: "400px", backgroundColor: canvasBgColor }} // ✅ Canvas Background Color
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 10]} />
              <SatelliteModel modelPath={modelPath} onColorExtracted={(color) => setCanvasBgColor(color.getStyle())} />
              <OrbitControls />
            </Canvas>

          ) : (
            <p className={styles.errorMessage}>⚠️ No file uploaded</p>
          )}
  
          {/* ✅ Upload File Section */}
          <div className={styles.uploadSection}>
            <p>Accepted formats: <b>.glb</b></p>
            <input 
              type="file" 
              accept=".glb" 
              ref={fileInputRef} 
              onChange={(event) => event.target.files && setSelectedFile(event.target.files[0])}
              className={styles.uploadInput} 
            />
            
            {selectedFile && (
              <button className={styles.uploadButton} onClick={handleFileUpload}>
                Upload 3D Model file
              </button>
            )}
          </div>
        </div>
      </div>
    </Draggable>,
    portalElement
  );
};

export default ThreeDModelWindow;
