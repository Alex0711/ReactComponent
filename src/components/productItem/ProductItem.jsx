import React from "react";
import "./productItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        add to cart
      </div>
    </div>
  );
};

export default ProductItem;
