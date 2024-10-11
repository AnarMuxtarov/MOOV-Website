import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import "../MovieBanner/MovieBanner.css"
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const MovieBanner = () => {
  return (
    <div>
 <Swiper navigation={true} modules={[Navigation]}   loop={true} className="mySwiper">
        <SwiperSlide><img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/Slide-2-av.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/slider2_d.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/Slide-1.jpg" alt=""  /></SwiperSlide>
     
      </Swiper>

    </div>
  )
}

export default MovieBanner