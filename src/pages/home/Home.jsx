import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../../redux/features/users";
import {
  actionCreators as productsActions,
  selector as productsSelector,
} from "../../redux/features/products";

import ProductItem from "../../components/productItem/ProductItem";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => usersSelector(state));
  const { products } = useSelector((state) => productsSelector(state));

  console.log({users, products})

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
