import React from "react";
import { PiShareNetworkFill } from "react-icons/pi";
import { IoIosPlay } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "../CardDetail_info/CardDetail_info.css";

const CardDetail_info = ({ movie }) => {
  return (
    <div id="CardDetail">
      <div className="container">
        <div className="cardDetail-left">
          <img src={movie.image} alt={movie.title} />
        </div>

        <div className="cardDetail-center">
          <h6>MOOV</h6>
          <h2>{movie.title}</h2>
          <div className="cardDetail-center-info">
            <span>PG 18</span>
            <span>HD</span>
            <span>{movie.category}</span>
            <span>
              {" "}
              <FaRegCalendarAlt />
              {movie.year}
            </span>
            <span>
              {" "}
              <FaRegClock />
              {movie.duration} min
            </span>
          </div>
          <p>
            {movie.description}
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>
          <div className="cardDetail-center-videoFragment">
            <ul>
              <li className="share">
                <a href="#" className="share-icon">
                  <PiShareNetworkFill /> Share
                </a>
              </li>
              <li>
                <h6>Fragment </h6>
                <span>Streaming Channels</span>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=R2gbPxeNk2E">
                  <IoIosPlay /> Watch Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cardDetail-right">
          <a href={movie.downloadLink}>
            Download
            <img src="fonts/download.svg" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDetail_info;
