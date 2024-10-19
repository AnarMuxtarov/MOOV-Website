import React from 'react'
import { BsBadgeHdFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTv } from "react-icons/tb";
import { HiTicket } from "react-icons/hi2";
import { FaChromecast } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import "./PricingDetails.css"

const PricingDetails = () => {
  return (
    <div id='PricingDetails'>
      <div className="container">
        <div className="pricingDetails-top">
        <h2>Our Details</h2>
        <p>Welcome to MOOV-MOVIE CENTER movie site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances. Explore our extensive library of movies, spanning across genres, eras, and cultures.</p>
        </div>
        <div className="pricingDetails-bottom">
           <div className="details-box">
               <div className="details-icon">
               <BsBadgeHdFill />
               </div>
               <div className="details-content">
               <h3 >Ultra HD</h3>
               <p >Experience movies like never before with our Ultra HD feature. Immerse yourself in stunning visuals, vibrant colors, and crystal-clear detail.</p>
               </div>

           </div>

           <div className="details-box">
               <div className="details-icon">
               <MdLocalMovies />
               </div>
               <div className="details-content">
               <h3 >Large movie database</h3>
               <p >Discover a vast and diverse collection of movies in our extensive database. With thousands of titles to choose from, you'll never run out of options.</p>
               </div>

           </div>


           <div className="details-box">
               <div className="details-icon">
               <TbDeviceTv />
               </div>
               <div className="details-content">
               <h3 >Online TV</h3>
               <p >Expand your entertainment horizons with our Online TV. Stream live TV channels, catch up on your favorite shows, and enjoy a wide range of television content online.</p>
               </div>

           </div>


           <div className="details-box">
               <div className="details-icon">
               <HiTicket />
               </div>
               <div className="details-content">
               <h3 >Early access to new items</h3>
               <p >Be the first to experience the latest movies and exclusive content with our Early Access feature. Get a sneak peek into upcoming releases, gain access to special screenings, and stay ahead of the curve.</p>
               </div>

           </div>


           <div className="details-box">
               <div className="details-icon">
               <FaChromecast />
               </div>
               <div className="details-content">
               <h3 >Airplay</h3>
               <p >Seamlessly stream movies from your device to the big screen with Airplay integration. Experience the cinematic magic in the comfort of your living room and share the excitement with friends and family.</p>
               </div>

           </div>


           <div className="details-box">
               <div className="details-icon">
               <IoLanguage />
               </div>
               <div className="details-content">
               <h3 >Multi language subtitles</h3>
               <p >Break language barriers and enjoy movies from around the world with our multi-language subtitles. Explore different cultures, expand your cinematic horizons, and appreciate the beauty of global cinema.</p>
               </div>

           </div>
        </div>
        
        
        </div>
       </div>
  )
}

export default PricingDetails