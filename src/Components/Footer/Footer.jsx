import React from "react";
import Img from "../../assets/Images/footer_logo.png";
import "../Footer/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

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
              <a href="/home"> Home </a>
            </li>
            <li>
              <a href="/movie">Movie</a>
            </li>
            <li>
              <a href="/tv-show">tv show</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Pages</a>
            </li>
            </div>

            <form action="#">
              <input type="text" placeholder="Find Favorite Movie" />
              <button>
              <IoSearchOutline />
              </button>
            </form>
          </div>
        </section>
        <section className="footer-bottom">
          <div className="navigations">
            <li>
              <a href="/"> Faq </a>
            </li>
            <li>
              <a href="/#">Help center</a>
            </li>
            <li>
              <a href="/tv-show">Terms of use</a>
            </li>
            <li>
              <a href="/pricing">Privace</a>
            </li>
          </div>
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
