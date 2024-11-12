import React, { useState } from "react";
import movies from "../../data.json";
import { Link } from "react-router-dom";

const HomeCategoryTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState("War Movie");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((movie) => movie.category === selectedCategory);

  return (
    <div id="Home-Category">
      <div className="container">
        <span className="category-subtitle">ONLINE STREAMING</span>
        <h2>Upcoming Movies</h2>

        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("All")}>All</button>
          <button onClick={() => handleFilterChange("Comedy Movie")}>
            Comedy
          </button>
          <button onClick={() => handleFilterChange("Fantasy Movie")}>
            Fantasy
          </button>
          <button onClick={() => handleFilterChange("War Movie")}>War</button>
        </div>

        <div className="movieGrid">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="movieCard">
              <div className="card-contents">
                <Link to={`/movie/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                </Link>
                <div className="movie-top">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>
                <div className="movie-bottom">
                  <p>{movie.category} </p>
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

export default HomeCategoryTwo;
