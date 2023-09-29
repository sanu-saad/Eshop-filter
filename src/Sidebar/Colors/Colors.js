import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="color">
      <h4>Color</h4>
      <div className="sidebar-label-container">
        <div className="item">
          <label>All</label>
          <input onChange={handleChange} type="radio" value="" name="test3" />
        </div>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test3"
          color="white"
        />
      </div>
    </div>
  );
};

export default Colors;
