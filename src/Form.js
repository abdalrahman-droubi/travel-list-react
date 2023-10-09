import { useState } from "react";

export default function Form({ setItems }) {
  const [data, setData] = useState({ description: "", quantity: 1 });

  function handleChange(e, value) {
    setData((preData) => ({
      ...preData,
      [e.target.name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!data.description) return;
    const newItem = { id: Date.now(), packed: false, ...data };
    setItems((preItems) => {
      return [...preItems, newItem];
    });
    setData((preData) => ({
      ...preData,
      description: "",
      quantity: 1,
    }));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name="quantity"
        onChange={(e) => handleChange(e, Number(e.target.value))}
        value={data.quantity}
      >
        {[...Array(20)].map((ele, index) => {
          return (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={data.description}
        onChange={(e) => handleChange(e, e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
