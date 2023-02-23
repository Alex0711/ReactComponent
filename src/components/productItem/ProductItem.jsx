import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./productItem.css";
import { useSelector, useDispatch } from "react-redux";
import {
  actionCreators as cartActions,
  selector as cartSelector,
} from "../../redux/features/cart";

const ProductItem = ({ product }) => {
  const { cart } = useSelector((state) => cartSelector(state));
  const dispatch = useDispatch();

  const buy = () => {
    dispatch(cartActions.addToCart(product))
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <HiOutlineShoppingCart onClick={buy} className="shopping-cart"/>
      </div>
    </div>
  );
};

export default ProductItem;
