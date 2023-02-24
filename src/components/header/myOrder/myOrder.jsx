import React from "react";
import { useSelector } from "react-redux";
import { selector as cartSelector } from "../../../redux/features/cart";
import OrderItem from "./orderItem/orderItem";
import "./myOrder.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

const MyOrder = ({setToggle}) => {
  const { cart } = useSelector((state) => cartSelector(state));
  const check = cart.products.reduce((a, b) => a + b.price, 0);

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <HiOutlineArrowCircleLeft className="arrow-left" onClick={() => setToggle()} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.products.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="checkout">
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$ {check} </p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
