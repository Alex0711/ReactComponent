import React from "react";
import { useSelector } from "react-redux";
import {
	selector as cartSelector,
  } from "../../../redux/features/cart";
import OrderItem from "./orderItem/orderItem";
import "./myOrder.css";

const MyOrder = () => {
  const { cart } = useSelector((state) => cartSelector(state));

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p>arrow</p>
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.products.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ 0</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
