import React, { useState } from "react";
import Img from "../../assets/Images/HeaderImages/header_logo.png";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
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

        <a className="btn">SIGN IN</a>

        <div className="toggle-btn" onClick={toggleMenu}>
          <TiThMenu />
        </div>

        {/* <div className="nav-link"> */}

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
