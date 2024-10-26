import React, {useState} from 'react'

import { FaRegCheckCircle } from "react-icons/fa";
import { BiMinusCircle } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import "./PriceModel.css"




const PriceModel = () => {
  
 const [openPayment,setOpenPayment]=useState(false)
 const handleWatcher = () => {
  setOpenPayment(true)
 }
 const handleCloser = () => {
setOpenPayment(false)
 }
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
            <a href="/signIN">Register</a>
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
            <a href="#" onClick={handleWatcher}>Choose Plan</a>
          </div>

          {openPayment&&
  <div className='modal-overlays'>
  <form  className='modal-content'>
    <button className='close-buttonModal' onClick={handleCloser}>
    <IoMdClose />
    </button>
  <h4>Select plan</h4>
       <div className="inputGroup">
         <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Full name"/>
       </div>
       <div className="inputGroup">
       <label htmlFor="email">Email</label>
       <input type="email"  id="email" placeholder="Email "/>
       </div>
     
       <select className="selectGroup" name="value" id="value">
         <option value="35">Premium - $19</option>
         <option value="50">Cinematic - $30</option>
       </select>
       <span className="txt-modal">You can spend money from your account on the renewal of the connected packages, or to order cars on our website.</span>
         <div className="payment-method">
           <label>Payment method:</label>
            <p>
             <input type="radio" name="payment" id="payments" />
             <label htmlFor="payments">Visa</label>
            </p>
            <p>
            <input type="radio" name="payment" id="payments" />
            <label htmlFor="payments">Mastercard</label>
            </p>
            <p>
            <input type="radio" name="payment" id="payments" />
            <label htmlFor="payments">Paypal</label>
            </p>
         </div>
    <button className="btn-Proceed">
       <span> <a href="/pricing">Proceed</a></span>
     </button>
  </form>
 </div>

    }




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
            <a href="#" onClick={handleWatcher}>Choose Plan</a>
          </div>
        </div>

      </div>



     
    




    </div>

  
          




       
  </div>
  )
}

export default PriceModel