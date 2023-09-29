import React from "react";
import "./Recommended.css";
import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="R-btns">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />

        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />

        <Button onClickHandler={handleClick} value="Puma" title="Puma" />

        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
