import React from "react";

export default function Stats({ items }) {
  const itemsNumber = items.length;
  const packedNumber = items.reduce((acc, currentItem) => {
    if (currentItem.packed) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
  return (
    <footer className="stats">
      <em>
        {" "}
        you have {itemsNumber} items on your list, and you already packed{" "}
        {packedNumber} ({Math.round((packedNumber / itemsNumber) * 100)}%)
      </em>
    </footer>
  );
}
