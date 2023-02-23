import React from "react";
import { useDispatch } from "react-redux";
import {
  actionCreators as cartActions,
  selector as cartSelector,
} from "../../../../redux/features/cart";
import "./orderItem.css";

const OrderItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("click");
    dispatch(cartActions.removeFromCart(product));
  };

  return (
    <div className="ProductItem-order">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>x</figure>
      </div>
    </div>
  );
};

export default OrderItem;
