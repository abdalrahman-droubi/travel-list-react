import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.toSorted((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    sortedItems = items.toSorted((a, b) => Number(a.packed) - Number(b.packed));

  const handleDelete = (id) => {
    alert("are you sure to delete this item");
    setItems((preItems) => preItems.filter((item) => item.id !== id));
  };
  const handlePacked = (id) => {
    setItems((preItems) =>
      preItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    setItems([]);
  };
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item, index) => {
          return (
            <Item
              item={item}
              handleDelete={handleDelete}
              handlePacked={handlePacked}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
