import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/Images/MovieImages/play_icon.png"
import Data from "../../data.json";
import "../MovieSearch/MovieSearch.css";

const MovieSearch = () => {
  const [search, setSerch] = useState("");

  return (
    <>
      <div id="Movie-Search">
        <h2>Movie Search</h2>
        <input
          className="input_search"
          type="text"
          placeholder=" Search for movies..."
          onChange={(event) => setSerch(event.target.value)}
        />

        <div className="parent_data">
          <div className="container">
          {/*Search dəyəri boşdursa movie qaytar digər halda movie.title  search dəyərinə uyğun gəlirsə, həmin filmi qaytar. */}
            {Data.filter((movie) => {
              if (search == "") {
                return movie;
              } else if (
                movie.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return movie;
              }
              // Süzgəçdən keçən datanı ekrana yazdır
            }).map((movie) => {
              return (
                <div key={movie.id} className="movieCard">
                <div className="card-contents">
                { /*Bu hissədə json faylımızdan gələn filmlərin id si ötürür movie.id*/}
                  <Link to={`/movieSearch/${movie.id}`}>
                    <img src={movie.image} alt={movie.title} className="cont-image" />
                  </Link>
              

                  <a href={movie.watchLink} className="pop-video" target="_blank" >
                    <img src={Img} alt="Play" />
                  </a>
              
                  <div className="movie-top">
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                  </div>
                  <div className="movie-bottom">
                    <p>{movie.quality}</p>
                    <p>rating: {movie.rating}</p>
                  </div>
                </div>
              </div>
              
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSearch;
