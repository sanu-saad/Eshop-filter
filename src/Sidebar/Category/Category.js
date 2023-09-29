import React from "react";
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div className="category">
      <h4>Category</h4>
      <div className="sidebar-label-container">
        <div className="item">
          <label>All</label>
          <input onChange={handleChange} type="radio" value="" name="test" />
        </div>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
