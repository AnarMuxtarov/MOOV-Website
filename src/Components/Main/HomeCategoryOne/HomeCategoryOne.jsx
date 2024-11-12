import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../../data.json";
import "./HomeCategoryOne.css";

const HomeCategoryOne = () => {
  const [selectedCategory, setSelectedCategory] = useState("Horror Movie");

  // Bu funksiyaya kateqoriya parametri ötürürük state dəyişəndə kateqoriyanı göstər
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  //  State dəyişəndə All-a bərabərdirsə  json faylımızdakı dataların hamısı göstər 
  // əks halda state kateqoriya-sı dəyişəndə jsonun categoriyasında uygun seç
       
  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((movie) => movie.category === selectedCategory);

  return (
    <div id="Home-Category">
      <div className="container">
        <span className="category-subtitle">ONLINE STREAMING</span>
        <h2>Top Rated Movies</h2>

        {/* { Kategoriyalara keçid düymələri} */}
        <div className="filter-buttons">
          <button className="active" onClick={() => handleFilterChange("All")}>
            All
          </button>
          <button onClick={() => handleFilterChange("Action Movie")}>
            Action
          </button>
          <button onClick={() => handleFilterChange("Horror Movie")}>
            Horror
          </button>
          <button onClick={() => handleFilterChange("Romantic Movie")}>
            Romantic
          </button>
        </div>

        <div className="movieGrid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movieCard">
              <div className="card-contents">
                { /*Bu hissədə json faylımızdan gələn filmlərin id si ötürür movie.id*/}
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                </Link>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryOne;
