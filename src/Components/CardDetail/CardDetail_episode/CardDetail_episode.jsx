import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import "../CardDetail_episode/CardDetail_episode.css";

const CardDetail_episode = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentVideoLink, setCurrentVideoLink] = useState("");

   // modal pəncərənin açılma funksiyası
  const handleWatch = (e, videoLink) => {
    //  e.preventDefault(); Səhifənin yenilənməsinin qarşısını alır
    e.preventDefault(); 
    // setCurrentVideoLink(videoLink);  videonun linkini state yazır
    setCurrentVideoLink(videoLink); 
    setOpenModal(true); 
  };
 // modal pəncərənin bağlanma funksiyası
  const handleCloseIframe = () => {
    setOpenModal(false);
    setCurrentVideoLink(""); 
  };

  return (
    <div id="CardDetail-episode">
      <div className="container">
        <div className="cardDetail-episode-Left">
          <div className="cardDetail-content">
            <span>ONLINE STREAMING</span>
            <h2>Watch Full Episode</h2>
          </div>
          <ul className="cardDetail-video">
            <li>
              <a href={movie.episode1_videoLink} onClick={(e) => handleWatch(e, movie.episode1_videoLink)}>
                <IoIosPlay /> Episode 1 - {movie.episode1_title}
              </a>
              <span className="duration">
                <FaRegClock /> {movie.episode1_duration} Min
              </span>
            </li>
            <li>
              <a href={movie.episode2_videoLink} onClick={(e) => handleWatch(e, movie.episode2_videoLink)}>
                <IoIosPlay /> Episode 2 - {movie.episode2_title}
              </a>
              <span className="duration">
                <FaRegClock /> {movie.episode2_duration} Min
              </span>
            </li>
            <li>
              <a href={movie.episode3_videoLink} onClick={(e) => handleWatch(e, movie.episode3_videoLink)}>
                <IoIosPlay /> Episode 3 - {movie.episode3_title}
              </a>
              <span className="duration">
                <FaRegClock /> {movie.episode3_duration} Min
              </span>
            </li>
            <li>
              <a href={movie.episode4_videoLink} onClick={(e) => handleWatch(e, movie.episode4_videoLink)}>
                <IoIosPlay /> Episode 4 - {movie.episode4_title}
              </a>
              <span className="duration">
                <FaRegClock /> {movie.episode4_duration} Min
              </span>
            </li>
            <li>
              <a href={movie.episode5_videoLink} onClick={(e) => handleWatch(e, movie.episode5_videoLink)}>
                <IoIosPlay /> Episode 5 - {movie.episode5_title}
              </a>
              <span className="duration">
                <FaRegClock /> {movie.episode5_duration} Min
              </span>
            </li>
          </ul>
        </div>
        <div className="cardDetail-episode-Right">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="cardDetail-episode-Bottom">
          <h3>
            About <span>History</span>
          </h3>
          <p>{movie.description}</p>
        </div>
      </div>

       {/* Modal pəncərə */}
      {openModal && (
        <div className="iframe-overlay">
          <div className="iframe-container">
            <iframe
              width="960"
              height="540"
              src={currentVideoLink}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button onClick={handleCloseIframe} className="close-iframe-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail_episode;
