import React from "react";
import "./Nav.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search" placeholder="Search Shoes.." />
      </div>
      <div className="profile-container">
        <a href="#">
          <AiOutlineHeart className="nav-icon" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>
        <a href="#">
          <BiUserPlus className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
