import React, { useEffect, useState } from "react";
import "./prod-details.scss";
import WhiteHeart from "../../assets/images/whiteHeart.svg";
import redHeart from "../../assets/images/heart.svg";
import YellowStar from "../../assets/images/star (5).svg";
import WhiteStar from "../../assets/images/star (0).svg";
import CIBLogo from "../../assets/images/CIB.png";
import ShippingIcon from "../../assets/images/shipping.svg";
import FreeIcon from "../../assets/images/free.svg";

const ProdDetails = ({ product }) => {
  const [count, setCount] = useState(1);
  const [heart, setHeart] = useState(true);

  const { img, title, price, inStock } = product;
  const [prices, setPrices] = useState(price);

  useEffect(() => {
    setPrices(price * count);
  }, [count]);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecreament = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="prodDetails">
      {/* Products Details images */}
      <div className="container__images">
        <div className="prodDetails__images">
          <img src={img} alt="img" />
          <img src={img} alt="img" />
          <img src={img} alt="img" />
          <img src={img} alt="img" />
          <img src={img} alt="img" />
        </div>

        {/* Products Details Main image */}
        <div className="prodDetails__mainimg">
          <img src={img} alt="img" />
        </div>
      </div>
      {/* Products Details Content */}
      <div className="prodDetails__content">
        {/* Products Details Content Heart Logo */}
        <img
          src={heart ? WhiteHeart : redHeart}
          alt="Heart Img"
          className="prodDetails__content__heart"
          onClick={() => {
            setHeart(!heart);
          }}
        />
        <h2 className="subTitle">APPLE</h2>

        <h3 className="mainTitle">{title}</h3>

        {/* Products Details Content Starts */}
        <div className="prodDetails__content__starts">
          <img src={YellowStar} alt="Yellow_Star" />
          <img src={YellowStar} alt="Yellow_Star" />
          <img src={YellowStar} alt="Yellow_Star" />
          <img src={WhiteStar} alt="White_Star" />
          <img src={WhiteStar} alt="White_Star" />

          <span>(506 Reviews)</span>
        </div>

        {/* Price */}

        <p className="prodDetails__content__price">${prices}.00</p>

        {/* Instoke */}

        <p
          className="prodDetails__content__instoke"
          style={{
            color: inStock ? "#36BA5C" : "#D63030",
          }}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </p>

        {/* Count */}
        <div className="prodDetails__content__counter">
          <button className="increase" onClick={handleIncreament}>
            +
          </button>
          <span className="count">{count}</span>
          <button className="decrease" onClick={handleDecreament}>
            -
          </button>
        </div>

        <div className="prodDetails__boxes">
          {/* Firsr Box Section */}
          <div className="full">
            <div className="box">
              <span
                style={{
                  color: "#C3C3C3",
                }}
              >
                Full Price
              </span>
            </div>
            <div className="box">
              <span>Installments</span>
            </div>
          </div>

          {/* Cib Section */}
          <div className="cib">
            <div className="box">
              <img src={CIBLogo} alt="CIBLogo" />
            </div>
            <div className="box">
              <img src={CIBLogo} alt="CIBLogo" />
            </div>
            <div className="box">
              <img src={CIBLogo} alt="CIBLogo" />
            </div>
            <div className="box">
              <img src={CIBLogo} alt="CIBLogo" />
            </div>
          </div>

          {/* Memory Section */}
          <h2 className="memory__title">Memory</h2>
          <div className="memory">
            <div
              className="box"
              style={{
                border: "1px solid #050708",
              }}
            >
              <span>128GB</span>
              <span>$999.00</span>
            </div>
            <div className="box">
              <span>256GB</span>
              <span>$999.00</span>
            </div>
            <div className="box">
              <span>512GB</span>
              <span>$999.00</span>
            </div>
            <div className="box">
              <span>1TB</span>
              <span>$999.00</span>
            </div>
          </div>

          {/* Color Section */}
          <h2 className="color__title">Color</h2>
          <div className="color">
            <div className="box">
              <span
                style={{
                  color: "#AAAAAA",
                }}
              >
                Silver
              </span>
              <i
                style={{
                  backgroundColor: "#EDEDED",
                }}
              ></i>
            </div>
            <div
              className="box"
              style={{
                border: "1px solid #050708",
              }}
            >
              <span>Sierra Blue</span>
              <i></i>
            </div>
          </div>
          {/* insurance Section */}
          <h2 className="insurance__title">Insurance</h2>
          <div className="insurance">
            <div className="box">
              <span>1 year</span>
              <span>$99.00</span>
            </div>
            <div
              className="box"
              style={{
                border: "1px solid #050708",
              }}
            >
              <span>2 year</span>
              <span>$159.00</span>
            </div>
          </div>
          {/* Button Of Section */}
          {inStock && <button className="addToCart">Add to cart</button>}
          {/* icons Section */}
          <div className="icons">
            <p>
              <img src={ShippingIcon} alt="ShippingIcon" />
              <span>Free shipping, arrives by Tue, Nov 23</span>
            </p>
            <p>
              <img src={FreeIcon} alt="FreeIcon" />
              <span>Free 10-day return window starts Dec 26th Details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
