import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination,Navigation } from "swiper/modules";

import "../MovieAction/MovieAction.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';





const MovieAction = () => {
  return (
    <>
    <Swiper
      slidesPerView={6}
      spaceBetween={15}
      pagination={{
        clickable: true,
   
      }
    }


    navigation={true}
    modules={[Pagination, Navigation]}
   
 
      
 
      breakpoints={{
        393: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        581: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        608: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 10,
        }
      }
      
      }





      className="mySwiper"
    >



        
      <SwiperSlide>
        
        <div className="card">
          <div className="card-img">
            <img
              src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg"
              alt=""
             
            />
          </div>
          <div className="card-content">
            <h2>James Bond 007</h2>
            <p>price 700$</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card-img">
            <img
              src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg"
              alt=""
             
            />
          </div>
          <div className="card-content">
            <h2>James Bond 007</h2>
            <p>price 700$</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt="" />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div>
      </SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt="" />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt="" />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt=""  />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt=""  />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt=""  />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
      <SwiperSlide>       <div className="card">
         <div className="card-img">
         <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/06/house-down-288x400.jpg" alt="" />
         </div>
         <div className="card-content">
            <h2>
              James Bond 007
            </h2>
            <p>price 700$</p>
         </div>
      
       </div></SwiperSlide>
    </Swiper>
  </>
  )
}

export default MovieAction