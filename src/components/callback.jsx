import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        id="input"
        aria-label="input"
        placeholder="Enter color name (e.g., red, yellow, green)"
        className="border p-2 rounded-md"
        onChange={handleChange}
        value={activeColor}
      />
    </div>
  );
};

export default Callback;
