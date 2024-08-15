import React from "react";
import Hero from "../../components/hero/Hero";
import Categorey from "../../components/category/Category";
import Product from "../../components/product/Product";
const Home = () => {
  return (
    <div>
      <Hero />
      <Categorey />
      <Product />
    </div>
  );
};

export default Home;