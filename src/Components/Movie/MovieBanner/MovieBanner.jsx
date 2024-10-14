import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./MovieBanner.css";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const MovieBanner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
        <SwiperSlide>
          <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/Slide-2-av.jpg" alt="" />
          <div className="slide-content">
            <h2>Movie</h2>
            <p>
          <a href="/home">Home</a> / Movie
        </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/slider2_d.jpg" alt="" />
          <div className="slide-content">
            <h2>Movie</h2>
            <p>
          <a href="/home">Home</a> / Movie
        </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://streamvid.gavencreative.com/wp-content/uploads/2023/02/Slide-1.jpg" alt="" />
          <div className="slide-content">
            <h2>Movie</h2>
            <p>
          <a href="/home">Home</a> / Movie
        </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MovieBanner;
