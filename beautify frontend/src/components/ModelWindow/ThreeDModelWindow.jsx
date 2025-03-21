// ThreeDModelWindow.jsx - Performance-optimized for large models
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Draggable from "react-draggable";
import styles from "./ThreeDModelWindow.module.css";

// Create a global variable outside the component to persist across renders
let globalPortalElement = null;

// Component implementation with fixed visibility
const ThreeDModelWindow = (props) => {
  const {
    profileId,
    zIndex,
    onMouseDown,
    onClose,
    windowZIndexes,
    showThreeDModelWindow,
    zIndexCounter,
    bringWindowToFront
  } = props;
  
  // Refs
  const portalRef = useRef(null);
  const hasCalledOnMouseDownRef = useRef(false);
  const threeInstanceRef = useRef(null);
  const nodeRef = useRef(null);
  const fileInputRef = useRef(null);
  const containerRef = useRef(null);
  const isInitializedRef = useRef(false);
  const modelRef = useRef(null);
  const threeRef = useRef(null);
  const controlsRef = useRef(null);
  const loaderRef = useRef(null);
  const dracoLoaderRef = useRef(null); // For draco compression
  const dataFetchedRef = useRef(false);
  const lastProfileIdRef = useRef(null);
  const portalCleanupDone = useRef(false);
  const isAutoRotatingRef = useRef(true);
  const resizeTimeoutRef = useRef(null); // For resize throttling

  // State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modelPath, setModelPath] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingBytes, setLoadingBytes] = useState(0); // Add bytes loaded
  const [totalBytes, setTotalBytes] = useState(0); // Add total bytes
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [isModelReady, setIsModelReady] = useState(false);
  const [portalError, setPortalError] = useState(false);
  const [portalCreated, setPortalCreated] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [adaptiveBackgroundColor, setAdaptiveBackgroundColor] = useState(null);
  const [modelStats, setModelStats] = useState({ vertices: 0, size: 0 }); // Track model stats
  const [showDetailedStats, setShowDetailedStats] = useState(false); // Toggle for stats display
  
  const API_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

  // Z-index management
  const effectiveZIndex = windowZIndexes?.ThreeDModelWindow || zIndex;

  useEffect(() => {
    console.log(`ThreeDModelWindow z-index updated to ${effectiveZIndex}`);
  }, [effectiveZIndex]);

  // Create or get the portal element only once on component mount
  useEffect(() => {
    // Create portal element if it doesn't exist globally
    if (!globalPortalElement) {
      globalPortalElement = document.createElement("div");
      globalPortalElement.id = "threeDModelWindow-root";
      document.body.appendChild(globalPortalElement);
      console.log("🌐 Created global portal element for 3D Model Window");
    }
    
    // Set the portal reference
    portalRef.current = globalPortalElement;
    
    // Only clean up Three.js resources on unmount, but DON'T remove the portal element
    return () => {
      console.log("⚠️ ThreeDModelWindow unmounting - cleaning up resources but keeping portal");
      
      // Prevent React from removing Three.js nodes directly
      const restore = preventReactTreeCleanup(containerRef);
      
      // Cancel animation frames
      if (window.threeDModelAnimationFrame) {
        cancelAnimationFrame(window.threeDModelAnimationFrame);
        delete window.threeDModelAnimationFrame;
      }
      
      // Clean up Three.js resources directly
      if (threeInstanceRef.current && threeInstanceRef.current.removeListeners) {
        threeInstanceRef.current.removeListeners();
      }
      
      if (threeInstanceRef.current && threeInstanceRef.current.renderer) {
        threeInstanceRef.current.renderer.dispose();
      }
      
      // Clean up Draco loader if it exists
      if (dracoLoaderRef.current) {
        dracoLoaderRef.current.dispose && dracoLoaderRef.current.dispose();
        dracoLoaderRef.current = null;
      }

      // Clear all timeouts
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      threeInstanceRef.current = null;
      isInitializedRef.current = false;
      portalRef.current = null;
    };
  }, []);

  const handleWindowClick = () => {
    console.log("🖱️ Clicked ThreeDModelWindow, bringing to front");
    if (onMouseDown) {
      onMouseDown();
    }
  };

  // Implement a custom close handler that cleans up properly
  const handleClose = () => {
    console.log("🔴 User closing ThreeDModelWindow");
    
    // Call the provided onClose function
    if (onClose) {
      onClose();
    }
  };

  // Toggle auto rotation
  const toggleAutoRotation = () => {
    const newState = !isAutoRotating;
    
    // Update React state
    setIsAutoRotating(newState);
    
    // Update ref for direct access
    isAutoRotatingRef.current = newState;
    
    // Apply directly to the OrbitControls if they exist
    if (controlsRef.current) {
      console.log(`🔄 Directly setting autoRotate to ${newState}`);
      controlsRef.current.autoRotate = newState;
    }
    
    // Also update in threeInstance for other code to reference
    if (threeInstanceRef.current) {
      threeInstanceRef.current.autoRotate = newState;
      console.log(`🔄 Auto-rotation ${newState ? 'enabled' : 'disabled'} in threeInstance`);
    }
  };

  // Add this helper outside your component
  const preventReactTreeCleanup = (targetRef) => {
    if (!targetRef || !targetRef.current) return;
    
    // Save any existing DOM content to a document fragment
    const fragment = document.createDocumentFragment();
    while (targetRef.current.firstChild) {
      fragment.appendChild(targetRef.current.firstChild);
    }
    
    // Replace the ref's content with a dummy element that React can safely remove
    const placeholder = document.createElement('div');
    targetRef.current.appendChild(placeholder);
    
    // Return a cleanup function that can restore the original content if needed
    return () => {
      if (targetRef.current) {
        targetRef.current.appendChild(fragment);
      }
    };
  };

  // Add keyframes animation
  useEffect(() => {
    const pulseAnimation = `
      @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    
    const styleEl = document.createElement('style');
    styleEl.innerHTML = pulseAnimation;
    document.head.appendChild(styleEl);
    
    return () => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  // Path testing effect with proper conditional
  useEffect(() => {
    // Always call the hook, but guard the internal logic
    if (!modelPath || !API_URL || !showThreeDModelWindow) return;

    const pathTestKey = `${modelPath}-${profileId}`;
    if (window._testedPaths && window._testedPaths[pathTestKey]) return;

    // Initialize tracking object if needed
    if (!window._testedPaths) window._testedPaths = {};
    window._testedPaths[pathTestKey] = true;

    // Now perform the tests
    const testPaths = [
        modelPath,
        `${API_URL}${modelPath.startsWith('/') ? '' : '/'}${modelPath}`,
        `/models/profile_${profileId}.glb`,
        `${window.location.origin}/models/profile_${profileId}.glb`,
        `${API_URL}/models/profile_${profileId}.glb`
    ];

    console.log("🧪 Testing all possible model paths (one-time check):");
    testPaths.forEach((path, index) => {
        fetch(path, { method: 'HEAD' })
            .then(response => {
                console.log(`Path ${index + 1}: ${path} - ${response.status} ${response.ok ? '✓' : '✗'}`);
            })
            .catch(err => {
                console.log(`Path ${index + 1}: ${path} - Error: ${err.message}`);
            });
    });
  }, [modelPath, API_URL, profileId, showThreeDModelWindow]);

  // API URL validation
  useEffect(() => {
    // GUARD: Only run once per API URL
    if (!API_URL || window._checkedApiUrl === API_URL) return;
    window._checkedApiUrl = API_URL;
    
    let baseUrl = API_URL;
    
    // Check if API_URL ends with a slash and remove it for consistency
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    
    // Validate and log the API URL
    console.log(`🔗 Using API URL: ${baseUrl}`);
    
    // Verify that the server is reachable - only once per URL
    fetch(`${baseUrl}/profiles`, { 
      method: 'HEAD',
      headers: { 'Cache-Control': 'no-cache' } 
    })
      .then(response => {
        if (response.ok) {
          console.log(`✅ API server is reachable (${response.status})`);
        } else {
          console.warn(`⚠️ API server returned status ${response.status}`);
        }
      })
      .catch(err => {
        console.error(`❌ Cannot reach API server: ${err.message}`);
      });
  }, [API_URL]);
  
  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    
    // Initial check
    checkDarkMode();
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Initial data fetch
  useEffect(() => {
    let isMounted = true;

    // Only execute the fetch if we're showing the window and have an API URL
    if (!showThreeDModelWindow || !API_URL) {
      // We need to still reset this flag when not visible
      if (!showThreeDModelWindow) {
        hasCalledOnMouseDownRef.current = false;
      }
      return;
    }

    // Skip if we've already fetched data for this profile
    if (dataFetchedRef.current && lastProfileIdRef.current === profileId) {
      console.log(`🔄 Skipping redundant API call for profile ${profileId}`);
      return;
    }

    console.log(`🪟 ThreeDModelWindow mounted for profile ${profileId}`);

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/profile/${profileId}`);
        if (!response.ok) throw new Error(`Failed to fetch model data: ${response.status}`);

        const data = await response.json();
        console.log("📄 Model data response:", data);

        if (isMounted) {
          if (data.model_path) {
            setModelPath(data.model_path);
            console.log(`🔗 Setting model path to: ${data.model_path}`);
          } else {
            setLoadError("No 3D model available for this profile");
            setIsLoading(false);
          }
          
          // Mark as fetched to prevent repeated calls
          dataFetchedRef.current = true;
          lastProfileIdRef.current = profileId;
        }
      } catch (error) {
        if (isMounted) {
          console.error("❌ Error fetching model data:", error);
          setLoadError(error instanceof Error ? error.message : "Failed to load model");
          setIsLoading(false);
        }
      }
    };

    fetchData();

    if (onMouseDown && !hasCalledOnMouseDownRef.current) {
      console.log("📱 Bringing 3D Model Window to front (one-time call)");
      onMouseDown();
      hasCalledOnMouseDownRef.current = true; // Mark that we've called it
    }

    return () => {
      isMounted = false;
      
      // Only reset fetch flag if profileId changed
      if (lastProfileIdRef.current !== profileId) {
        dataFetchedRef.current = false;
      }
    };
  }, [profileId, showThreeDModelWindow, API_URL, onMouseDown]);
  
  // Helper function to properly dispose of Three.js resources
  function disposeNode(node) {
    if (!node) return;
    
    if (node.geometry) {
      node.geometry.dispose();
    }
    
    if (node.material) {
      if (Array.isArray(node.material)) {
        node.material.forEach(material => disposeMaterial(material));
      } else {
        disposeMaterial(node.material);
      }
    }
  }

  function disposeMaterial(material) {
    if (!material) return;
    
    // Dispose of all material properties that could be textures
    Object.keys(material).forEach(prop => {
      if (material[prop] && material[prop].isTexture) {
        material[prop].dispose();
      }
    });
    
    material.dispose();
  }
  
  // Top-level cleanup function with improved resource disposal
  const cleanup = () => {
    try {
      console.log("🧹 Running top-level cleanup");
      
      // Cancel any animation frames
      if (window.threeDModelAnimationFrame) {
        cancelAnimationFrame(window.threeDModelAnimationFrame);
        delete window.threeDModelAnimationFrame;
      }

      // Clear any pending resize timeouts
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = null;
      }
      
      // Properly dispose of model resources
      if (modelRef.current) {
        modelRef.current.traverse(disposeNode);
      }
      
      // Clear Three.js resources
      if (threeInstanceRef.current) {
        // Dispose scene and renderer if they exist
        if (threeInstanceRef.current.renderer) {
          threeInstanceRef.current.renderer.dispose();
        }
        
        // Remove event listeners if they were added
        if (threeInstanceRef.current.removeListeners) {
          threeInstanceRef.current.removeListeners();
        }
        
        // Clear the reference
        threeInstanceRef.current = null;
      }

      // Clear controls reference
      if (controlsRef.current) {
        controlsRef.current.dispose && controlsRef.current.dispose();
        controlsRef.current = null;
      }
      
      // Clear loader reference
      loaderRef.current = null;
      
      // Clear Draco loader reference
      if (dracoLoaderRef.current) {
        dracoLoaderRef.current.dispose && dracoLoaderRef.current.dispose();
        dracoLoaderRef.current = null;
      }

      // Reset the initialization flag but DON'T clear container contents through React
      isInitializedRef.current = false;
      setIsModelReady(false);
      
      // Reset model reference
      modelRef.current = null;
      
      // Reset adaptive background color
      setAdaptiveBackgroundColor(null);
    } catch (error) {
      console.error("❌ Safe Cleanup Error:", error);
    }
  };
  
  // Setup Three.js after component is fully mounted
  useEffect(() => {
    if (!showThreeDModelWindow || !containerRef.current || !modelPath || isInitializedRef.current) {
      return;
    }
    
    console.log("🔧 Ready to initialize Three.js:", {
      showThreeDModelWindow,
      containerExists: !!containerRef.current,
      modelPath,
      alreadyInitialized: isInitializedRef.current
    });
    
    // Delay Three.js initialization to ensure DOM stability
    const initTimer = setTimeout(() => {
      if (containerRef.current) {
        console.log("⏱️ Delayed initialization starting now");
        initThreeJS();
      } else {
        console.log("❌ Container no longer exists after delay");
      }
    }, 300);
    
    return () => {
      clearTimeout(initTimer);
    };
  }, [showThreeDModelWindow, modelPath]);

  // Initialize Three.js safely with performance optimizations
  const initThreeJS = () => {
    // Early exit if already initialized or container disappeared
    if (isInitializedRef.current || !containerRef.current) return;
    isInitializedRef.current = true;
    
    import('three')
      .then(THREE => {
        // Store THREE reference for use in other functions
        threeRef.current = THREE;
        
        // First import DRACOLoader for compression support
        import('three/examples/jsm/loaders/DRACOLoader.js')
          .then(({ DRACOLoader }) => {
            // Then import GLTFLoader
            import('three/examples/jsm/loaders/GLTFLoader.js')
              .then(({ GLTFLoader }) => {
                // Finally import OrbitControls
                import('three/examples/jsm/controls/OrbitControls.js')
                  .then(({ OrbitControls }) => {
                    // Safe check if component is still mounted
                    if (!containerRef.current) {
                      console.log("Container no longer exists, aborting Three.js setup");
                      return;
                    }
                    
                    try {
                      // Setup Three.js scene
                      const width = containerRef.current.clientWidth;
                      const height = containerRef.current.clientHeight;
                      
                      // Create renderer with optimizations
                      const renderer = new THREE.WebGLRenderer({ 
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance", // Performance optimization
                        precision: "mediump" // Medium precision is usually sufficient
                      });
                      
                      // Optimize renderer settings
                      renderer.setSize(width, height);
                      // Limit pixel ratio for high DPI displays
                      renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
                      
                      // Create scene with frustum culling enabled
                      const scene = new THREE.Scene();
                      scene.frustumCulled = true; // Enable frustum culling
                      scene.background = new THREE.Color(isDarkMode ? 0x1a1a1a : 0xf5f5f5);
                      
                      // Create camera
                      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
                      camera.position.set(5, 5, 10);
                      
                      // Add lights
                      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
                      scene.add(ambientLight);
                      
                      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
                      directionalLight.position.set(10, 10, 5);
                      scene.add(directionalLight);
                      
                      // Create controls with auto-rotation
                      const controls = new OrbitControls(camera, renderer.domElement);
                      controls.enableDamping = true;
                      controls.dampingFactor = 0.05; // Add damping for smoother movement
                      
                      // Get the initial auto-rotation state from state/ref
                      controls.autoRotate = isAutoRotatingRef.current;
                      controls.autoRotateSpeed = 1.0; // Slower for better performance
                      
                      // Store controls in ref for direct access from UI
                      controlsRef.current = controls;
                      
                      // Log the initial auto-rotation state
                      console.log(`🔄 Controls created with autoRotate=${controls.autoRotate}`);
                      
                      // Add renderer to container
                      if (containerRef.current) {
                        containerRef.current.appendChild(renderer.domElement);
                      } else {
                        console.error("Container lost during initialization");
                        return;
                      }
                      
                      // Function to clean up resources
                      const cleanupThreeResources = () => {
                        try {
                          // Cancel any animation frames first
                          if (window.threeDModelAnimationFrame) {
                            cancelAnimationFrame(window.threeDModelAnimationFrame);
                            delete window.threeDModelAnimationFrame;
                          }
                          
                          // Dispose of resources
                          if (controls) controls.dispose();
                          
                          // Remove DOM elements carefully
                          if (renderer && renderer.domElement) {
                            try {
                              const parent = renderer.domElement.parentNode;
                              if (parent && parent.contains(renderer.domElement)) {
                                parent.removeChild(renderer.domElement);
                              }
                            } catch (e) {
                              console.warn("Could not remove renderer element:", e);
                            }
                            renderer.dispose();
                          }
                          
                          // Clear references
                          scene.clear();
                          
                          isInitializedRef.current = false;
                        } catch (error) {
                          console.error("❌ Local cleanup error:", error);
                        }
                      };
                      
                      // Function to calculate dominant color from a model
                      const calculateDominantColor = (model) => {
                        try {
                          // Make sure we have a valid THREE reference
                          if (!threeRef.current) {
                            console.error("THREE not available for color calculation");
                            return null;
                          }
                          
                          // Create a small offscreen renderer to capture the model
                          const offscreenRenderer = new threeRef.current.WebGLRenderer({ 
                            antialias: false, // Turn off for performance
                            preserveDrawingBuffer: true 
                          });
                          offscreenRenderer.setSize(16, 16); // Smaller for better performance
                          
                          // Create temporary camera and scene
                          const tempScene = new threeRef.current.Scene();
                          const tempCamera = new threeRef.current.PerspectiveCamera(45, 1, 0.1, 1000);
                          tempCamera.position.set(5, 5, 10);
                          
                          // Add model to temp scene
                          tempScene.add(model.clone());
                          
                          // Add lighting
                          const ambientLight = new threeRef.current.AmbientLight(0xffffff, 0.7);
                          tempScene.add(ambientLight);
                          
                          // Render the scene
                          offscreenRenderer.render(tempScene, tempCamera);
                          
                          // Get pixel data
                          const gl = offscreenRenderer.getContext();
                          const pixels = new Uint8Array(16 * 16 * 4);
                          gl.readPixels(0, 0, 16, 16, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
                          
                          // Calculate average color, skipping black/transparent pixels
                          let r = 0, g = 0, b = 0, total = 0;
                          
                          for (let i = 0; i < pixels.length; i += 4) {
                            // Skip transparent or black pixels
                            if (pixels[i+3] > 10 && (pixels[i] > 5 || pixels[i+1] > 5 || pixels[i+2] > 5)) {
                              r += pixels[i];
                              g += pixels[i+1];
                              b += pixels[i+2];
                              total++;
                            }
                          }
                          
                          // Cleanup
                          offscreenRenderer.dispose();
                          
                          if (total === 0) return null; // No valid pixels
                          
                          // Get average
                          r = Math.floor(r / total);
                          g = Math.floor(g / total);
                          b = Math.floor(b / total);
                          
                          // Create a contrasting background color (inverted with reduced intensity)
                          const invR = 255 - r;
                          const invG = 255 - g;
                          const invB = 255 - b;
                          
                          // Create a subtle background (blend inverted with white/black)
                          const baseColor = isDarkMode ? 0 : 255;
                          const blendFactor = 0.85; // Subtlety factor
                          
                          const bgR = Math.floor(invR * (1-blendFactor) + baseColor * blendFactor);
                          const bgG = Math.floor(invG * (1-blendFactor) + baseColor * blendFactor);
                          const bgB = Math.floor(invB * (1-blendFactor) + baseColor * blendFactor);
                          
                          console.log(`🎨 Detected dominant color: rgb(${r},${g},${b})`);
                          console.log(`🎨 Created background color: rgb(${bgR},${bgG},${bgB})`);
                          
                          return new threeRef.current.Color(bgR/255, bgG/255, bgB/255);
                        } catch (err) {
                          console.error("❌ Error calculating dominant color:", err);
                          return null;
                        }
                      };
                      
                      // Make sure we have the correct full path to the model
                      let fullModelPath = modelPath;
                      if (modelPath) {
                        if (modelPath.startsWith('http')) {
                          // Already a full URL
                          fullModelPath = modelPath;
                        } else if (modelPath.startsWith('/models/')) {
                          // This is a path to the API server's models folder
                          fullModelPath = `${API_URL}${modelPath}`;
                        } else if (modelPath.startsWith('/')) {
                          // Some other absolute path
                          fullModelPath = `${API_URL}${modelPath}`;
                        } else {
                          // Relative path
                          fullModelPath = `${API_URL}/${modelPath}`;
                        }
                      }

                      console.log('🔍 Path Construction (Improved):');
                      console.log(`- Original model path: "${modelPath}"`);
                      console.log(`- API URL: "${API_URL}"`);
                      console.log(`- Using path: "${fullModelPath}"`);

                      // Only use these two paths for model loading:
                      const priorityPaths = [
                        fullModelPath,
                        `${API_URL}/models/profile_${profileId}.glb`
                      ];

                      // Add timeout handling with longer initial timeout
                      let loadTimeout = setTimeout(() => {
                        console.warn("⚠️ Model loading timeout - retrying with cache busting...");
                        retryLoading();
                      }, 30000); // 30 second timeout for large models

                      // Setup Draco compression loader for better performance
                      const dracoLoader = new DRACOLoader();
                      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
                      dracoLoader.setDecoderConfig({ type: 'js' });
                      dracoLoaderRef.current = dracoLoader;
                      
                      // Create the loader with Draco compression
                      const loader = new GLTFLoader();
                      loader.setDRACOLoader(dracoLoader);
                      loaderRef.current = loader;
                      
                      const retryLoading = () => {
                        clearTimeout(loadTimeout);
                        console.log("🔄 Retrying model load with cache busting...");
                        
                        // Try with a cache-busting parameter
                        const cacheBuster = `?t=${Date.now()}`;
                        
                        // Try a different path construction approach on retry
                        const retryPath = modelPath?.startsWith('/')
                          ? `${window.location.origin}${modelPath}${cacheBuster}`
                          : `${fullModelPath}${cacheBuster}`;
                        
                        console.log(`🔄 Retry path: ${retryPath}`);
                        
                        // Use loaderRef.current instead of loader
                        if (loaderRef.current) {
                          loaderRef.current.load(
                            retryPath,
                            onModelLoaded,
                            onProgress,
                            onError
                          );
                        } else {
                          console.error("❌ Loader is not available for retry");
                          setLoadError("Cannot load model: loader unavailable");
                          setIsLoading(false);
                        }
                      };

                      // Helper function to simplify geometry for better performance
                      const optimizeMesh = (mesh) => {
                        // Skip non-mesh objects
                        if (!mesh.isMesh) return mesh;
                      
                        // Skip already optimized meshes
                        if (mesh.userData.optimized) return mesh;
                      
                        try {
                          // Get original geometry
                          const geometry = mesh.geometry;
                          
                          // Skip non-BufferGeometry
                          if (!geometry.isBufferGeometry) return mesh;
                          
                          // Skip geometries with missing attributes
                          if (!geometry.attributes.position) return mesh;
                          
                          // Mark as optimized to avoid processing it again
                          mesh.userData.optimized = true;
                          
                          // Add frustum culling
                          mesh.frustumCulled = true;
                          
                          return mesh;
                        } catch (err) {
                          console.warn("Error optimizing mesh:", err);
                          return mesh;
                        }
                      };

                      // Create Level of Detail for large models
                      const setupLOD = (model, box, size) => {
                        try {
                          // If the model isn't very large, return it as is
                          if (countVertices(model) < 100000) {
                            return model;
                          }
                          
                          // If THREE.LOD isn't available, return the original model
                          if (!threeRef.current.LOD) {
                            return model;
                          }
                          
                          console.log("📊 Setting up LOD for large model");
                          
                          // Create a new LOD object
                          const lod = new threeRef.current.LOD();
                          
                          // Add the original model as the highest detail level
                          lod.addLevel(model, 0);
                          
                          // Clone the model for lower detail levels
                          const simplifiedModel = model.clone();
                          
                          // Simplify the model by traversing it and applying optimizations
                          simplifiedModel.traverse((node) => {
                            if (node.isMesh) {
                              optimizeMesh(node);
                            }
                          });
                          
                          // Add the simplified model for viewing at a distance
                          lod.addLevel(simplifiedModel, size * 1.5);
                          
                          // Return the LOD object
                          return lod;
                        } catch (err) {
                          console.warn("Failed to setup LOD:", err);
                          return model;
                        }
                      };

                      // Model loaded handler with performance optimizations
                      const onModelLoaded = (gltf) => {
                        clearTimeout(loadTimeout);
                        
                        if (!containerRef.current) {
                          cleanupThreeResources();
                          return;
                        }
                        
                        try {
                          console.log("✅ Model loaded successfully - processing model data");
                          const model = gltf.scene;
                          
                          // Store model in ref for rotation controls
                          modelRef.current = model;
                          
                          // Center and scale model
                          const box = new THREE.Box3().setFromObject(model);
                          const center = new THREE.Vector3();
                          box.getCenter(center);
                          
                          model.position.sub(center);
                          
                          const size = box.getSize(new THREE.Vector3()).length();
                          const scale = 5 / size;
                          model.scale.set(scale, scale, scale);
                          
                          // Add more detailed diagnostic logging
                          const vertexCount = countVertices(model);
                          console.log(`📊 Model stats: vertices=${vertexCount}, size=${size}`);
                          
                          // Store model stats for UI display
                          setModelStats({
                            vertices: vertexCount,
                            triangles: Math.round(vertexCount / 3),
                            size: size,
                            fileSize: totalBytes > 0 ? 
                                     (totalBytes / (1024 * 1024)).toFixed(2) + " MB" : 
                                     "Unknown"
                          });
                          
                          // Optimize entire model for better performance
                          model.traverse((node) => {
                            if (node.isMesh) {
                              // Apply optimizations to each mesh
                              optimizeMesh(node);
                              
                              // Simplify material if possible
                              if (node.material) {
                                if (node.material.map) {
                                  // Downscale textures for better performance
                                  node.material.map.minFilter = THREE.LinearFilter;
                                  node.material.map.magFilter = THREE.LinearFilter;
                                  node.material.map.anisotropy = 1; // Lower anisotropy for performance
                                }
                              }
                            }
                          });
                          
                          // Calculate and set adaptive background color based on model
                          try {
                            console.log("🎨 Analyzing model for dominant color...");
                            const dominantColor = calculateDominantColor(model);
                            if (dominantColor) {
                              scene.background = dominantColor;
                              setAdaptiveBackgroundColor(dominantColor.getStyle());
                              console.log(`🎨 Set background to: ${dominantColor.getStyle()}`);
                            }
                          } catch (err) {
                            console.error("❌ Error setting adaptive background:", err);
                          }
                          
                          // Apply Level of Detail for large models
                          const finalModel = vertexCount > 100000 ? 
                                            setupLOD(model, box, size) : 
                                            model;
                          
                          scene.add(finalModel);
                          
                          setIsLoading(false);
                          setIsModelReady(true);
                          console.log("✅ Model successfully added to scene");
                        } catch (err) {
                          console.error("❌ Error processing loaded model:", err);
                          setLoadError(`Error processing model: ${err.message}`);
                          setIsLoading(false);
                        }
                      };

                      // Helper function to count vertices (for diagnostics)
                      const countVertices = (model) => {
                        let count = 0;
                        model.traverse((obj) => {
                          if (obj.isMesh && obj.geometry) {
                            const position = obj.geometry.getAttribute('position');
                            if (position) count += position.count;
                          }
                        });
                        return count;
                      };

                      // Improved progress tracking
                      const onProgress = (progress) => {
                        try {
                          // Log all progress events for debugging
                          console.log(`📊 Progress: loaded=${progress.loaded} bytes, total=${progress.total || 'unknown'} bytes`);
                          
                          // Store bytes loaded for better user feedback
                          setLoadingBytes(progress.loaded || 0);
                          
                          // Ensure we have valid progress values
                          if (progress.total > 0) {
                            setTotalBytes(progress.total);
                            const percent = Math.round((progress.loaded / progress.total) * 100);
                            setLoadingProgress(percent);
                            console.log(`📊 Loading progress: ${percent}%`);
                          } else {
                            // If we can't calculate percentage, show indeterminate progress
                            console.log(`📊 Loading in progress (bytes: ${progress.loaded})`);
                            // Simulate progress to give user feedback
                            setLoadingProgress((prev) => (prev < 90 ? prev + 5 : prev));
                          }
                        } catch (err) {
                          console.warn("⚠️ Error reporting progress:", err);
                          // Keep advancing progress to provide feedback
                          setLoadingProgress((prev) => (prev < 90 ? prev + 5 : prev));
                        }
                      };

                      const onError = (error) => {
                        clearTimeout(loadTimeout);
                        console.error("❌ Error loading model:", error);
                        
                        // Direct fetch check for file existence
                        console.log(`🔍 Checking if GLB file exists at: ${fullModelPath}`);
                        fetch(fullModelPath, { method: 'HEAD' })
                          .then(response => {
                            console.log(`📋 HEAD check for ${fullModelPath}: ${response.status} ${response.ok ? '✓' : '✗'}`);
                            if (!response.ok) {
                              console.log('⚠️ Primary file path returned error, will try alternatives');
                            }
                          })
                          .catch(err => {
                            console.log(`❌ Error checking file: ${err.message}`);
                          });

                        // Detailed error reporting
                        if (error.target && error.target instanceof XMLHttpRequest) {
                          console.error(`❌ XHR Error Status: ${error.target.status}`);
                          console.error(`❌ XHR Error Response: ${error.target.responseText || 'No response'}`);
                        }
                        
                        setLoadError(`Error loading model: ${error.message || "Unknown error"}`);
                        setIsLoading(false);
                        
                        // Attempt to provide more specific error information
                        if (error.message && error.message.includes("404")) {
                          setLoadError(`Model file not found (404). Check if '${fullModelPath}' exists on the server.`);
                        } else if (error.message && error.message.includes("Failed to fetch")) {
                          setLoadError("Network error. Check your internet connection or server status.");
                        } else if (error.message && error.message.includes("Unexpected token")) {
                          setLoadError("Invalid model format. The file may be corrupted or not a valid GLB file.");
                        } else if (error.message && error.message.includes("Cross-Origin")) {
                          setLoadError("Cross-origin (CORS) error. Server configuration issue.");
                        }
                      };

                      // Log the paths we'll try
                      console.log('🚀 Will attempt to load from:', priorityPaths);

                      // Load model with proper loader reference
                      const tryLoadModel = (path, onSuccess, onProgress, onError) => {
                        console.log(`🔄 Attempting to load model from: ${path}`);
                        // Make sure we use the loader from the ref
                        if (loaderRef.current) {
                          loaderRef.current.load(path, onSuccess, onProgress, onError);
                        } else {
                          console.error("❌ Loader is not available");
                          setLoadError("Cannot load model: loader unavailable");
                          setIsLoading(false);
                        }
                      };

                      // Start with the first path
                      tryLoadModel(priorityPaths[0], onModelLoaded, onProgress, (error) => {
                        console.error(`❌ Failed to load from primary path: ${error.message}`);
                        
                        // If that fails, try the second path
                        if (priorityPaths.length > 1) {
                          console.log(`🔄 Trying fallback path: ${priorityPaths[1]}`);
                          tryLoadModel(priorityPaths[1], onModelLoaded, onProgress, (finalError) => {
                            console.error(`❌ All paths failed: ${finalError.message}`);
                            setLoadError("Could not load model file. Please upload a model file.");
                            setIsLoading(false);
                          });
                        } else {
                          setLoadError(`Error loading model: ${error.message}`);
                          setIsLoading(false);
                        }
                      });

                      // Optimized animation loop
                      const animate = () => {
                        if (!containerRef.current) {
                          if (window.threeDModelAnimationFrame) {
                            cancelAnimationFrame(window.threeDModelAnimationFrame);
                            delete window.threeDModelAnimationFrame;
                          }
                          return;
                        }
                        
                        // Update controls - this is critical for auto-rotation to work
                        if (controlsRef.current) {
                          // Ensure auto-rotation state is always synced from React state
                          controlsRef.current.autoRotate = isAutoRotatingRef.current;
                          controlsRef.current.update();
                        }
                        
                        renderer.render(scene, camera);
                        window.threeDModelAnimationFrame = requestAnimationFrame(animate);
                      };
                      
                      // Throttled resize handler for better performance
                      const handleResize = () => {
                        if (resizeTimeoutRef.current) {
                          clearTimeout(resizeTimeoutRef.current);
                        }
                        
                        resizeTimeoutRef.current = setTimeout(() => {
                          if (!containerRef.current) return;
                          
                          const width = containerRef.current.clientWidth;
                          const height = containerRef.current.clientHeight;
                          
                          renderer.setSize(width, height);
                          camera.aspect = width / height;
                          camera.updateProjectionMatrix();
                        }, 100); // 100ms throttle
                      };
                      
                      window.addEventListener('resize', handleResize);
                      
                      // Store instance functions for cleanup
                      threeInstanceRef.current = {
                        animate,
                        renderer,
                        removeListeners: () => {
                          window.removeEventListener('resize', handleResize);
                          if (resizeTimeoutRef.current) {
                            clearTimeout(resizeTimeoutRef.current);
                            resizeTimeoutRef.current = null;
                          }
                        },
                        autoRotate: isAutoRotatingRef.current
                      };
                      
                      // Start animation loop
                      animate();
                      
                    } catch (error) {
                      console.error("Error initializing Three.js:", error);
                      setLoadError("Failed to initialize 3D viewer");
                      setIsLoading(false);
                    }
                  });
              });
          });
      })
      .catch(error => {
        console.error("Error loading Three.js libraries:", error);
        setLoadError("Failed to load 3D libraries");
        setIsLoading(false);
      });
  };
  
  // Format file size for display
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  
  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Error: No file selected');
      return;
    }
    
    if (!selectedFile.name.endsWith('.glb')) {
      setUploadStatus('Error: Only .glb files are supported');
      return;
    }
    
    // Check file size (100MB limit)
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes
    if (selectedFile.size > maxSize) {
      setUploadStatus(`Error: File exceeds 100MB limit (${(selectedFile.size/1024/1024).toFixed(2)}MB)`);
      return;
    }
    
    // Clean up existing Three.js instance before uploading
    cleanup();
    isInitializedRef.current = false;
    
    setIsLoading(true);
    setUploadStatus('Uploading model...');
    
    // Create FormData with progress tracking
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('profile_id', String(profileId));
    
    try {
      console.log(`📤 Starting upload for ${selectedFile.name}`);
      
      // Track upload progress using XMLHttpRequest
      const xhr = new XMLHttpRequest();
      
      // Set up progress tracking
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadStatus(`Uploading: ${percentComplete}%`);
          console.log(`📤 Upload progress: ${percentComplete}%`);
        }
      });
      
      // Create a promise to handle the XHR response
      const uploadPromise = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            } catch (e) {
              reject(new Error('Invalid response format'));
            }
          } else {
            reject(new Error(`Server returned ${xhr.status}: ${xhr.statusText}`));
          }
        });
        
        xhr.addEventListener('error', () => {
          reject(new Error('Network error during upload'));
        });
        
        xhr.addEventListener('abort', () => {
          reject(new Error('Upload aborted'));
        });
      });
      
      // Set up the request
      xhr.open('POST', `${API_URL}/api/upload-glb`, true);
      xhr.send(formData);
      
      // Wait for the upload to complete
      const result = await uploadPromise;
      
      console.log('✅ Upload successful:', result);
      
      // Reset data fetched flag to load new model
      dataFetchedRef.current = false;
      
      setModelPath(result.model_path);
      setUploadStatus('Model uploaded successfully! Loading model...');
      setLoadError(null);
      setSelectedFile(null);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Preload the model with direct fetch to validate
      const modelUrl = result.model_path.startsWith('http') 
        ? result.model_path 
        : `${API_URL}${result.model_path.startsWith('/') ? '' : '/'}${result.model_path}`;
        
      console.log(`🔎 Checking uploaded model at: ${modelUrl}`);
      
      // Validate the uploaded file with a HEAD request
      fetch(modelUrl, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            console.log('✅ Uploaded model file is accessible');
          } else {
            console.warn(`⚠️ Uploaded model file returned status ${response.status}`);
            setUploadStatus(`Warning: Model may not load correctly (HTTP ${response.status})`);
          }
        })
        .catch(err => {
          console.error('❌ Error validating uploaded file:', err);
        });
      
      // Automatically hide success message after delay
      setTimeout(() => {
        setUploadStatus(null);
      }, 5000);
    } catch (error) {
      console.error('❌ Error uploading model:', error);
      setUploadStatus(`Error: ${error.message}`);
      setLoadError(`Upload failed: ${error.message}`);
      setIsLoading(false);
    }
  };

  // Check if portal is ready before attempting to render
  const portalReady = !!portalRef.current;

  // Don't render if window shouldn't be visible or portal ref isn't ready
  // CRITICAL FIX: Always place useState, useRef, useEffect BEFORE any conditional return
  if (!showThreeDModelWindow || !portalReady) {
    console.log("🚫 Not rendering ThreeDModelWindow - visibility:", showThreeDModelWindow, "portal ready:", portalReady);
    return null;
  }
  
  // Get position from sessionStorage or use default
  const defaultPosition = {
    x: Math.max(0, (window.innerWidth - 600) / 2),
    y: Math.max(0, (window.innerHeight - 550) / 2)
  };
  
  console.log("📍 Model window position:", defaultPosition);
  console.log("✅ Rendering ThreeDModelWindow - visibility:", showThreeDModelWindow);
  console.log("📊 Z-index:", effectiveZIndex);

  try {
    // Use portalRef.current instead of portalElement
    return createPortal(
      <div 
        className="three-model-window-container" 
        style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: effectiveZIndex,
          pointerEvents: "none" // Allow clicks to pass through the container but not the window
        }}
      >
        <Draggable
          nodeRef={nodeRef}
          handle=".drag-handle"
          defaultPosition={defaultPosition}
          bounds="parent"
        >
          <div 
            ref={nodeRef} 
            style={{ 
              position: "absolute",
              zIndex: effectiveZIndex,
              backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
              color: isDarkMode ? "#fff" : "#000",
              width: "600px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
              pointerEvents: "auto", // Ensure clicks work on the window
              visibility: "visible",
              opacity: 1,
              willChange: "transform, z-index"
            }}
            onClick={handleWindowClick}
          >
            <div 
              className="drag-handle"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                backgroundColor: isDarkMode ? "#2c2c2c" : "#f0f0f0",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                cursor: "grab"
              }}
            >
              <h2 style={{ margin: 0 }}>Satellite Model Viewer</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling to the window
                  handleClose();
                }}
                style={{ 
                  color: isDarkMode ? "white" : "black",
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                ✖
              </button>
            </div>
            
            <div style={{ padding: "20px" }}>
              {/* Upload status message */}
              {uploadStatus && (
                <div style={{ 
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "4px",
                  backgroundColor: uploadStatus.includes('Error') 
                    ? (isDarkMode ? "#3d0000" : "#ffdddd") 
                    : (isDarkMode ? "#004d00" : "#ddffdd"),
                  color: uploadStatus.includes('Error')
                    ? (isDarkMode ? "#ff8080" : "#d00000")
                    : (isDarkMode ? "#80ff80" : "#00b000")
                }}>
                  {uploadStatus}
                </div>
              )}

              {/* Control buttons */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}>
                {/* Stats toggle button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetailedStats(!showDetailedStats);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 14px",
                    backgroundColor: showDetailedStats ? "#00bcd4" : (isDarkMode ? "#444" : "#f0f0f0"),
                    color: showDetailedStats ? "white" : (isDarkMode ? "#fff" : "#444"),
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {showDetailedStats ? "Hide Stats" : "Show Stats"}
                </button>
                
                {/* Auto-rotation toggle button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAutoRotation();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 14px",
                    backgroundColor: isAutoRotating ? "#00bcd4" : (isDarkMode ? "#444" : "#f0f0f0"),
                    color: isAutoRotating ? "white" : (isDarkMode ? "#fff" : "#444"),
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <span style={{ 
                    display: "inline-block",
                    marginRight: "8px",
                    animation: isAutoRotating ? "spin 2s linear infinite" : "none" 
                  }}>
                    🔄
                  </span>
                  {isAutoRotating ? "Stop Rotation" : "Auto-Rotate"}
                </button>
              </div>

              {/* Model stats (when toggled) */}
              {showDetailedStats && modelStats.vertices > 0 && (
                <div style={{
                  backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                  borderRadius: "4px",
                  padding: "8px 12px",
                  marginBottom: "10px",
                  fontSize: "14px"
                }}>
                  <div><strong>Vertices:</strong> {modelStats.vertices.toLocaleString()}</div>
                  <div><strong>Triangles:</strong> {modelStats.triangles.toLocaleString()}</div>
                  {totalBytes > 0 && (
                    <div><strong>File Size:</strong> {formatFileSize(totalBytes)}</div>
                  )}
                </div>
              )}

              {/* 3D Model Viewer */}
              <div 
                ref={containerRef}
                id="model-container"
                style={{ 
                  height: "400px", 
                  marginBottom: "20px",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
                  position: "relative",
                  backgroundColor: adaptiveBackgroundColor || (isDarkMode ? "#111" : "#f5f5f5")
                }}
              >
                {/* Enhanced loading overlay */}
                {isLoading && (
                  <div style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
                    zIndex: 10
                  }}>
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                      <div style={{ fontSize: "18px", marginBottom: "8px" }}>
                        Loading 3D model...
                      </div>
                      <div style={{ fontSize: "14px", opacity: 0.8 }}>
                        {loadingProgress > 0 ? 
                          `${loadingProgress}% (${formatFileSize(loadingBytes)})` : 
                          "Initializing..."}
                      </div>
                    </div>
                    
                    <div style={{ 
                      width: "70%", 
                      height: "12px", 
                      backgroundColor: isDarkMode ? "#333" : "#ddd",
                      borderRadius: "6px",
                      overflow: "hidden",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2)"
                    }}>
                      <div style={{
                        width: `${loadingProgress > 0 ? loadingProgress : 5}%`,
                        height: "100%",
                        backgroundColor: loadingProgress > 0 ? "#00bcd4" : "#999",
                        transition: "width 0.3s ease",
                        animation: loadingProgress === 0 ? "pulse 1.5s infinite" : "none"
                      }} />
                    </div>
                    
                    {/* Add retry button if stuck for too long */}
                    {loadingProgress === 0 && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("🔄 Manual retry requested");
                          // Force remount of component
                          cleanup();
                          isInitializedRef.current = false;
                          setModelPath(null);
                          setTimeout(() => {
                            fetch(`${API_URL}/api/profile/${profileId}`)
                              .then(res => res.json())
                              .then(data => {
                                if (data.model_path) {
                                  setModelPath(data.model_path);
                                  console.log("🔄 Forced model reload");
                                }
                              });
                          }, 500);
                        }}
                        style={{
                          marginTop: "20px",
                          padding: "8px 16px",
                          backgroundColor: isDarkMode ? "#444" : "#eee",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          color: isDarkMode ? "#fff" : "#000"
                        }}
                      >
                        Retry Loading
                      </button>
                    )}
                  </div>
                )}
                
                {/* Error message */}
                {loadError && !isLoading && (
                  <div style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
                    color: "#e74c3c",
                    padding: "20px",
                    textAlign: "center",
                    zIndex: 10
                  }}>
                    <div style={{ marginBottom: "20px" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12" y2="16" />
                      </svg>
                    </div>
                    <div>{loadError}</div>
                  </div>
                )}
                
                {/* No model message */}
                {!modelPath && !isLoading && !loadError && (
                  <div style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isDarkMode ? "#1a1a1a" : "#f5f5f5",
                    zIndex: 10
                  }}>
                    <div style={{ marginBottom: "10px" }}>No 3D model available</div>
                    <div style={{ fontSize: "14px", opacity: 0.7 }}>Upload a .glb file below</div>
                  </div>
                )}
              </div>
              
              {/* File Upload Section */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "15px",
                backgroundColor: isDarkMode ? "#111" : "#f5f5f5",
                borderRadius: "4px",
                border: "1px solid " + (isDarkMode ? "#333" : "#ddd"),
                marginTop: "10px"
              }}>
                <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                  Upload 3D Model
                </p>
                
                <div style={{ fontSize: "14px", opacity: 0.8, marginBottom: "8px" }}>
                  Accepts <b>.glb</b> files - Max size: 100MB
                </div>
                
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input 
                    type="file" 
                    accept=".glb"
                    ref={fileInputRef}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const file = e.target.files[0];
                        console.log(`📦 Selected file: ${file.name}, size: ${(file.size/1024/1024).toFixed(2)}MB`);
                        setSelectedFile(file);
                      }
                    }}
                    style={{ 
                      flex: 1,
                      padding: "8px",
                      border: "1px solid " + (isDarkMode ? "#444" : "#ccc"),
                      borderRadius: "4px",
                      backgroundColor: isDarkMode ? "#222" : "#fff",
                      color: isDarkMode ? "#fff" : "#000"
                    }}
                  />
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFileUpload();
                    }}
                    disabled={!selectedFile || isLoading}
                    style={{
                      padding: "10px 16px",
                      backgroundColor: selectedFile && !isLoading ? "#4caf50" : "#ccc",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: selectedFile && !isLoading ? "pointer" : "not-allowed",
                      fontWeight: "bold",
                      minWidth: "80px"
                    }}
                  >
                    {isLoading ? "Uploading..." : "Upload"}
                  </button>
                </div>
                
                {selectedFile && (
                  <div style={{
                    marginTop: "8px",
                    padding: "8px",
                    backgroundColor: isDarkMode ? "#222" : "#e7f7e7",
                    borderRadius: "4px",
                    fontSize: "14px"
                  }}>
                    <div>Selected: <b>{selectedFile.name}</b></div>
                    <div>Size: {(selectedFile.size/1024/1024).toFixed(2)}MB</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Draggable>
      </div>,
      portalRef.current
    );
  } catch (err) {
    console.error("Error rendering portal:", err);
    setPortalError(true);
    return null;
  }
};

export default ThreeDModelWindow;