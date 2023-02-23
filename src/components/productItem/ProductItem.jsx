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

  const addProduct = () => {
    const newProduct = {
      ...product,
      id: cart.products.length
    }
    dispatch(cartActions.addToCart(newProduct));
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <HiOutlineShoppingCart onClick={addProduct} className="shopping-cart"/>
      </div>
    </div>
  );
};

export default ProductItem;
