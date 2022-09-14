import "./slider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SliderData from "../../assets/data/SliderData";

import sliderLeft from "../../assets/images/sliderLeft.svg";
import sliderRight from "../../assets/images/sliderRight.svg";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <img src={sliderLeft} className="sliderLeft" alt="sliderLeft" />
        <img src={sliderRight} className="sliderRight" alt="sliderRight" />

        <div className="bottom__circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {SliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="SliderImg" className="SliderImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
