import React from "react";
// import OrderItem from '../components/OrdersItem';
import "./myOrder.css";

const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p>arrow</p>
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {/* {state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))} */}
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
