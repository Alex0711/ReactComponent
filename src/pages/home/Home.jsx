import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as usersActions } from "../../redux/features/users";
import {
  actionCreators as productsActions,
  selector as productsSelector,
} from "../../redux/features/products";

import ProductItem from "../../components/productItem/ProductItem";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => productsSelector(state));

  useEffect(() => {
    dispatch(usersActions.list());
    dispatch(productsActions.list());
  }, [dispatch]);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.dataList.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;
