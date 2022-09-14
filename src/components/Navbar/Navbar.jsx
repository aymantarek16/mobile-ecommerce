import React, { Fragment } from "react";
import "./navbar.scss";
import Logo from "../../assets/images/Logo-2x.png";
import search from "../../assets/images/search-normal@2x.png";
import profile from "../../assets/images/profile@2x.png";
import bag from "../../assets/images/bag-2@2x.png";
import Hamburger_Menu from "../../assets/images/hamburger-menu@2x.png";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav">
        
        <a href='/home' className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="Hamburger_Menu">
          <img src={Hamburger_Menu} alt="Hamburger_Menu" />
        </div>

        
          <ul className="nav__links">
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Tv</li>
            <li>Accessories</li>
            <li>Offers</li>
            <li className="support">Support</li>
            <li>Services</li>
            <li>Locations</li>
          </ul>

        <div className="nav__icons">
          <img src={search}  className='icon'  alt="search_icon" />
            <img src={profile} className='icon'   alt="profile_icon" />
            <img src={bag}  className='icon'  alt="cart_icon" />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
