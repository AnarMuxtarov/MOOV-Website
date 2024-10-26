import React from "react";
import Img from "../../assets/Images/FooterImages/footer_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="footer-top">
          <div className="footer-logo">
            <img src={Img} alt="footer-logo" />
          </div>

          <div className="navigations">
            <div className="nav-text">
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a href="/movie">Movie</a>
              </li>
              <li>
                <a href="/tvShow">tv show</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
            </div>

            <form action="/movie">
              <input type="text" placeholder="Find Favorite Movie" />
              <button>
                <IoSearchOutline />
              </button>
            </form>
          </div>
        </section>
        <section className="footer-bottom">
          <div className="navigations"></div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
