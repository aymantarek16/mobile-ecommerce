import React from "react";
import "./products.scss";
import ProductsData from "../../assets/data/ProductsData";

import sliderLeft from "../../assets/images/sliderLeft.svg";
import sliderRight from "../../assets/images/sliderRight.svg";
import { Link } from "react-router-dom";

const Products = ({ h1 }) => {
  return (
    <div className="products">
      {h1 && (
        <div className="products__title">
          <h1>Explore Products</h1>
        </div>
      )}

      <div className="products__items">
        {ProductsData.map((item) => (
          <Link
            to={`/home/${item.id}`}
            className="products__item"
            key={item.id}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="products__item__image">
              <img src={item.img} alt="product" />
            </div>
            <div className="products__item__title">
              <h1>{item.title}</h1>
            </div>
            <div className="products__item__price">
              <h1>${item.price}.00</h1>
              <h2 className="oldPrice">{item.oldPrice}.00</h2>
            </div>
            <div
              className="products__item__instoke"
              style={{
                color: item.inStock ? "#36BA5C" : "#D63030",
              }}
            >
              {<h3>{item.inStock ? "In Stock" : "Out of Stock"}</h3>}
            </div>
          </Link>
        ))}
      </div>

      <div className="bottomslider">
        <img src={sliderLeft} alt="slider_Left" className="slider_Left" />
        <div className="slider_dotes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={sliderRight} alt="slider_Right" className="slider_Right" />
      </div>
    </div>
  );
};

export default Products;
