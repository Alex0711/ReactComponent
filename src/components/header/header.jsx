import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";
import { selector as cartSelector } from "../../redux/features/cart";
import MyOrder from "./myOrder/myOrder";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useSelector((state) => cartSelector(state));

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
          <li className="cart-container" onClick={handleToggle}>
            <HiOutlineShoppingCart className="shopping-cart" />
            <div className="items-count">
              <p className="items">{cart.products.length}</p>
            </div>
          </li>
        </ul>
      </div>
      {toggle && <MyOrder setToggle={setToggle} />}
    </nav>
  );
};

export default Header;
