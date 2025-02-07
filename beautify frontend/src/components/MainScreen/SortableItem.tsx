import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: number;
  text: string;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, text }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    margin: "5px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    cursor: "grab",
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {text}
    </li>
  );
};
