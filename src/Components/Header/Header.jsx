import React, { useState } from "react";
import Img from "../../assets/Images/HeaderImages/header_logo.png";
import { TiThMenu } from "react-icons/ti";
import { NavLink,Link } from "react-router-dom";
import "../Header/Header.css";



const Header = () => {
  const [open, setOpen] = useState(false);
  // State dəyişdikdə əksinə çevir (toggle)
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <img src={Img} alt="header-logo" />
        </div>

        <ul className="navigation ">
          <li className="navigation-link">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to="/movie">Movie</NavLink>
            <ul className="submenu">
              <li>
                <a href="/Movie">Movie</a>
              </li>
              <li>
              <a href="/movieSearch/1" >
              Movie Details
                </a>
              </li>
            </ul>
          </li>
          <li className="navigation-link">
            <NavLink to="/tvShow">tv show</NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to="/contacts">contacts</NavLink>
          </li>
        </ul>

        <NavLink to="/signIN" className="btn">
          SIGN IN
        </NavLink>

        <div className="toggle-btn" onClick={toggleMenu}>
          <TiThMenu />
        </div>

        {/* <div className="nav-link"> */}
              
              {/* açıq deyilsə gizlət cssdə əks halda göstər-active dizayn media cssdə 941pxdə*/}
        <div className={!open ? "nav-link " : "nav-link active"}>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/movie">Movie</NavLink>
          </li>
          <li>
            <NavLink to="/tvShow">tv show</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">contacts</NavLink>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Header;
