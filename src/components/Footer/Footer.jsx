import React from "react";
import "./footer.scss";
import Img1 from '../../assets/images/Footer1.svg';
import Img2 from '../../assets/images/Footer2.svg';
import Img3 from '../../assets/images/Footer3.svg';
import Img4 from '../../assets/images/Footer4.svg';

const Footer = () => {
  return (
    <>
      <div className="footer">
                <div className="footer__image">
                    <img src={Img1} alt='footer__img' />
                    <img src={Img2} alt='footer__img' />
                    <img src={Img3} alt='footer__img' />
                    <img src={Img4} alt='footer__img' />
                </div>

                <span>Copyright © 2022 - All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;
