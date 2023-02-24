import React from "react";
import { useDispatch } from "react-redux";
import {
  actionCreators as cartActions,
  selector as cartSelector,
} from "../../../../redux/features/cart";
import { HiXCircle } from "react-icons/hi"
import "./orderItem.css";


const OrderItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
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
        <HiXCircle onClick={handleClick} className="close-icon" />
      </div>
    </div>
  );
};

export default OrderItem;
