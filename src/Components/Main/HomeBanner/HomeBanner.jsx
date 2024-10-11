import React from "react";
import "../HomeBanner/HomeBanner.css";
import { BsBadge4kFill } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <div id="HomeBanner">
      <div className="container">
        <div className="homeBanner-content">
          <h6>MOOV</h6>
          <h2>
            Top <span>Movies</span>: From Classics to New Releases
          </h2>
          <div>
            <ul>
              <li>
                <a href="#" className="category">
                  Action,
                </a>
                <a href="#" className="category">
                  horror
                </a>
              </li>
              <li class="release-time">
                <span>
                  <BsBadge4kFill />
                  2023
                </span>
                <span>
                  <GoStopwatch /> 90 min
                </span>
              </li>
            </ul>
          </div>
          <a
            href="https://www.youtube.com/watch?v=TWY-yjRSziQ&pp=ygUVam9obiB3aWNrIDRrIHRyYWlsZXIg"
            className="btn btn-home"
          >
            <FaCirclePlay /> Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
