import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";
import { useEffect, useState } from "react";
import styles from "./MainScreen.module.css";

interface DraggableBoxProps {
  id: string;
  header: string;
  options: string[];
  data?: {
    type: string;
    [key: string]: any;
  };
  isDropped?: boolean;
  isInBottomSection?: boolean;
  className?: string;
  removeDroppedItem?: (id: string) => void;
  isCheckoutEditing?: boolean;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ 
  id, 
  header, 
  options, 
  data, 
  isDropped, 
  isInBottomSection, 
  removeDroppedItem, 
  isCheckoutEditing = false,
  className
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: id,
    data: {
      type: "draggable-item",
      isDraggable: !isDropped || isCheckoutEditing,
      isDropped: isDropped
    },
    disabled: false
  });

  const isDarkMode = document.documentElement.classList.contains("dark");

  const defaultBgColor = isDarkMode ? "#2d2d2d" : "#f8f9fa";  
  const droppedBgColor = defaultBgColor; 

  const shouldApplyEffect = isInBottomSection && isDropped && !isCheckoutEditing;

  // Calculate height dynamically based on the max number of options in all dropped items
  const baseHeight = 80; // Base height for header and padding
  const optionHeight = 24; // Height per option
  const maxVisibleOptions = 10; // Allow up to 10 options before scrolling
  const totalHeight = baseHeight + (Math.min(options.length, maxVisibleOptions) * optionHeight);
  const requiresScroll = options.length > maxVisibleOptions;

  const [maxHeight, setMaxHeight] = useState(totalHeight);

  useEffect(() => {
    const allDroppedBoxes = document.querySelectorAll('[data-dropped="true"]');
    let highest = totalHeight;

    allDroppedBoxes.forEach(box => {
      const optionCount = box.querySelectorAll("label").length;
      const calculatedHeight = baseHeight + (Math.min(optionCount, maxVisibleOptions) * optionHeight);
      if (calculatedHeight > highest) {
        highest = calculatedHeight;
      }
    });

    setMaxHeight(highest);
  }, [options.length, isDropped]);

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
    padding: "8px",
    margin: "0",
    backgroundColor: isDropped ? droppedBgColor : defaultBgColor,
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: shouldApplyEffect ? "not-allowed" : isDragging ? "grabbing" : "grab", // ✅ Only disable cursor in bottom section
    display: "inline-block",
    width: "145px",
    height: `${maxHeight}px`, // ✅ Apply max height across all boxes
    boxSizing: "border-box",
    opacity: shouldApplyEffect ? 0.5 : 1, // ✅ Only make translucent in bottom section
    color: isDarkMode ? "#ffffff" : "black",
    position: "relative",
    zIndex: isDragging ? 999 : 1, // ✅ Ensure correct layering
    touchAction: "none",
    userSelect: "none",
    overflowY: requiresScroll ? "auto" : "hidden", // ✅ Only enable scrolling after 10 options
    overflowX: "hidden", 
    whiteSpace: "normal", 
    pointerEvents: shouldApplyEffect ? "none" : "auto", // ✅ Only make unselectable in bottom section
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(isDropped && !isCheckoutEditing ? {} : listeners)}
      data-draggable-id={id}
      data-dropped={isDropped ? "true" : "false"}
      className={className}
    >
{isDropped && removeDroppedItem && isCheckoutEditing && (
  <button
    onClick={() => removeDroppedItem(id)}
    className={styles.removeDraggedItemsButton}
  >
    ✖
  </button>
)}

      <h4 style={{ textAlign: "center", wordWrap: "break-word" }}>{header}</h4>
      {options.map(option => (
        <label key={option} style={{ 
          display: "flex", 
          alignItems: "center", 
          fontSize: "12px", 
          marginBottom: "4px", 
          textAlign: "left" 
        }}>
          <input 
            type="checkbox" 
            disabled={isDropped && !isCheckoutEditing}
            style={{ marginRight: "6px" }}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default DraggableBox;
