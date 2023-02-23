import React, { useState, useContext } from "react";
import "./../../styles/header.css";

const Header = () => {
  return (
    <nav>
      phoneMenu
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
            cart
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
