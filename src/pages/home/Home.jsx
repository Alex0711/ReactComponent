import React from "react";
import ProductItem from "../../components/productItem/ProductItem";
import "./home.css";

const API = "https://api.escuelajs.co/api/v1/products";
const products = [
  {
	id: 1,
	title: "Product",
	images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"],
  },
  { id: 2, title: "Product",
  images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"], },
  { id: 3, title: "Product",
  images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"], },
  { id: 4, title: "Product",
  images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"], },
  { id: 5, title: "Product",
  images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"], },
  { id: 6, title: "Product",
  images: ["https://api.lorem.space/image/shoes?w=640&h=480&r=6575"], },
];

const Home = () => {
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Home;