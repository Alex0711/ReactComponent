import React from "react";
import "./header.css";
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <nav>
        <HiMenuAlt1 className="menu" />
      <div className="navbar-left">
        <p className="nav-logo">Un logo</p>
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
          <li>
            <HiOutlineShoppingCart className="shopping-cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
