import { useState } from "react";
import Img from "../../../assets/Images/MovieImages/download.svg";
import { PiShareNetworkFill } from "react-icons/pi";
import { IoIosPlay } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "../CardDetail_info/CardDetail_info.css";

const CardDetail_info = ({ movie }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleWatch = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div id="CardDetail" className="card-detail-container">
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
              <FaRegCalendarAlt />
              {movie.year}
            </span>
            <span>
              <FaRegClock />
              {movie.duration} min
            </span>
          </div>
          <p>{movie.description}</p>
          <div className="cardDetail-center-videoFragment">
            <ul>
              <li className="share">
                <a href="#" className="share-icon">
                  <PiShareNetworkFill /> Share
                </a>
              </li>
              <li>
                <h6>Fragment</h6>
                <span>Streaming Channels</span>
              </li>
              <li>
                <a href="#" onClick={handleWatch}>
                  <IoIosPlay /> Watch Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cardDetail-right">
          <a href={movie.downloadLink} download>
            Download
            <img src={Img} alt={movie.title} />
          </a>
        </div>
      </div>

      {openModal && (
        <div className="modal-overlay">
          <iframe
            width="960"
            height="540"
            src={movie.fragment}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <button onClick={handleClose} className="modalCloser">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CardDetail_info;
