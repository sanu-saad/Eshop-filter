import React from "react";

const Input = ({ handleChange, value, title, color, name }) => {
  return (
    <div className="item">
      <label style={{ backgroundColor: color }}>{title}</label>
      <input onChange={handleChange} type="radio" value={value} name={name} />
    </div>
  );
};

export default Input;
