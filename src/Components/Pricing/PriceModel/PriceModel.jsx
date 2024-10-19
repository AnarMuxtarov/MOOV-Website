import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { BiMinusCircle } from "react-icons/bi";
import "./PriceModel.css"

const PriceModel = () => {
  return (
    <div id="Pricing">
    <div className="container">
      <div className="pricing-top">
        <span >our pricing plans</span>
        <h2 >Price Structuring Model</h2>
      </div>
      <div className="pricing-bottom">
        <div className="pricing-box">
          <div className="pricing-subscription">
            <h6>Basic</h6>
            <div className="subscription-price">
              <h3 className="title-color1">Free</h3>
              <span>7 days</span>
            </div>
          </div>

          <div className="pricing-list">
            <ul>
              <li>
                <FaRegCheckCircle /> Video quality <span>good</span>
              </li>
              <li>
                <FaRegCheckCircle /> Resolution <span>720p</span>
              </li>
              <li>
              <BiMinusCircle /> Support
                <span>Limited </span>
              </li>
              <li>
              <BiMinusCircle />Limited Availability
              </li>
            </ul>
          </div>

          <div className="pricing-btn">
            <a href="#">Buy Now</a>
          </div>
        </div>


        <div className="pricing-box">
          <div className="pricing-subscription">
            <h6>premium</h6>
            <div className="subscription-price">
              <h3 className="title-color2">$19</h3>
              <span>Monthly</span>
            </div>
          </div>

          <div className="pricing-list">
            <ul>
              <li>
               <FaRegCheckCircle /> Video quality <span>better</span>
              </li>
              <li>
               <FaRegCheckCircle /> Resolution <span>Full HD</span>
              </li>
              <li>
               <FaRegCheckCircle /> Support
                <span>24/7</span>
              </li>
              <li>
              <BiMinusCircle />Limited Availability
              </li>
            </ul>
          </div>

          <div className="pricing-btn">
            <a href="#">Buy Now</a>
          </div>
        </div>




        <div className="pricing-box">
          <div className="pricing-subscription">
            <h6>Cinematic</h6>
            <div className="subscription-price">
              <h3 className="title-color3">$30</h3>
              <span>Quaterly</span>
            </div>
          </div>

          <div className="pricing-list">
            <ul>
              <li>
               <FaRegCheckCircle /> Video quality <span>best</span>
              </li>
              <li>
               <FaRegCheckCircle /> Resolution <span>Ultra HD</span>
              </li>
              <li>
               <FaRegCheckCircle /> Support
                <span>24/7</span>
              </li>
              <li>
               <FaRegCheckCircle />Limited Availability
              </li>
            </ul>
          </div>

          <div className="pricing-btn">
            <a href="#">Buy Now</a>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default PriceModel