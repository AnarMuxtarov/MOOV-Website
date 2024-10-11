import React from "react";
import "../Our Services/OurServices.css";
import Img from "../../../assets/Images/services_img.jpg"
// import {FaTv} from  "@react-icons/all-files/fa/FaBeer"
import { FaTv } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";

const OurServices = () => {
  return (
    <section id="Our-Services">
      <div className="container">
        <div className="our-Services-left">
          <img src={Img} alt="img-service" />
        </div>
        <div className="our-Services-right">
          <span>Our Services</span>
          <h2>Download Your Shows Watch Offline.</h2>
          <p>
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>

          <div className="service-card">
            <div className="service-card-icon">
              <FaTv />
            </div>
            <div className="service-card-info">
              <h5>Enjoy on Your TV.</h5>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-icon">
              <BsCameraReelsFill />
            </div>
            <div className="service-card-info">
              <h5>Watch Everywhere.</h5>
              <p>
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
