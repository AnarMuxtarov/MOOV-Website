 import React from 'react'
import "../Live Movie/LiveMovie.css"
import Img from "../../../assets/Images/family-tv.webp"
import { FaPlay } from "react-icons/fa";

const LiveMovie = () => {
  return (
    <section id='Live-Movie'>
  <div className="container">
   <div className="live-Movie-left">
   <span className='sub-text'>Internet Broadcasting</span>
   <h2>Entertainment for Friends & Family: Movies & TV Shows</h2>
   <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
   <div className="live-card">
      <div className="live-card-hdversion">
      <h2>HD 8K</h2>
      </div>
      <div className="live-card-originalversion">
      <h4> <span> <div>20</div> </span>  K+</h4>
      <p>Active Customer</p>
      </div>
   </div>

   <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className='btn'><FaPlay /> Watch Now</a>
   </div>
   <div className="live-Movie-right">
    <img src={Img} alt="liveImg"  />
   </div>

 </div> 
    </section>


  )
}

export default LiveMovie