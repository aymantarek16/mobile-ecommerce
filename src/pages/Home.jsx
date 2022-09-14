import React from "react";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Slider />
      <Products h1={true} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
