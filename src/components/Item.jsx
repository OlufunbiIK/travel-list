import React from "react";

export default function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li
      className="flex gap-2 items-center text-white
    "
    >
      <input
        type="checkbox"
        value={id.packed}
        onChange={() => {
          onToggleItem(id);
        }}
      />
      <span
        style={{
          textDecoration: packed ? "line-through" : "none",
          color: packed ? "white" : "black",
        }}
      >
        {quantity} {description}
      </span>
      <button className="ml-auto" onClick={() => onDeleteItem(id)}>
        ❌
      </button>
    </li>
  );
}
