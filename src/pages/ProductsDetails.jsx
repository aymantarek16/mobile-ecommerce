import React from "react";
import Helmet from "react-helmet";
import Products from "../components/Products/Products";
import ProdDetails from "../components/ProdDetails/ProdDetails";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductsData from "../assets/data/ProductsData";

const ProductsDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((product) => product.id === id);

  
  return (
    <>
      <Helmet>
        <title>Product Details | {product.title} </title>
      </Helmet>
      <ProdDetails product={product}/>
      <Products h1={false}/>
      <Footer/>
    </>
  );
};

export default ProductsDetails;
