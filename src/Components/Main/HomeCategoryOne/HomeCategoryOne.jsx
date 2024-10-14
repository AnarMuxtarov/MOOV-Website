import React, { useState } from "react";
import movies from "../../TvShow/TvShowPagination/data.json";
import "./HomeCategoryOne.css";

const HomeCategoryOne = () => {
  const [selectedCategory, setSelectedCategory] = useState("Horror Movie");

  // Function to handle filter changes
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtering movies based on selected category
  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((movie) => movie.category === selectedCategory);

  return (
    <div id="Home-Category">
      <div className="container">
      <span className="category-subtitle">ONLINE STREAMING</span>
      <h2>Top Rated Movies</h2>

{/* Filter buttons */}
<div className="filter-buttons">
  <button className="active" onClick={() => handleFilterChange("All")}>All</button>
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


        {/* Movie cards */}
        <div className="movieGrid">
        
        {filteredMovies.map((movie) => (
            <div key={movie.id} className="movieCard">
                       <div className="card-contents">
            <img src={movie.image} alt={movie.title} />
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