import React from "react";
import "./../../styles/header.css";
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";


const Header = () => {
  return (
    <nav>
      <HiMenuAlt1 />
      <div className="navbar-left">
        Un logo
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">alex.senger@hotmail.com</li>
          <li
            className="navbar-shopping-cart"
          >
            <HiOutlineShoppingCart />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
