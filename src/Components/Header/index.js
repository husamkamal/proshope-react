import "./style.css";
import React from "react";
// import Button from "../Button";
import H1 from "../H1";
import Input from "../Input";
  import {
    FaSearch,
    FaUserAlt,
    FaBookmark,
    FaShoppingCart,
  } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header flex">
      <span className="flex">
        Pro<H1>Shop</H1>
      </span>
      <div className="input-label flex">
        <Input type={"search"} placeholder={"iphone"} >  <FaSearch /> Search    </Input>
      </div>
      <div className="icons flex">
        <div className="icon flex">
          <FaUserAlt/>
         <span> Login / Sign up</span>
        </div>
        <div className="icon flex">
          <FaBookmark />
          <span>Wishlist</span>
        </div>
        <div className="icon flex">
          <FaShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
