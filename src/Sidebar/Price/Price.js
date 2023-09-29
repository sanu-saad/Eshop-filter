import React from "react";
import "./price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="price">
      <h4>Price</h4>
      <div className="sidebar-label-container">
        <div className="item">
          <label>All</label>
          <input onChange={handleChange} type="radio" value="" name="test2" />
        </div>
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
