import React, { useState } from "react";
import movies from "../../TvShow/TvShowPagination/data.json";
import "./HomeCategoryTwo.css";

// const movies = [
//   { id: 1, title: 'The Easy Reach', category: 'Movies', year: 2021 },
//   { id: 2, title: 'The Cooking', category: 'Movies', year: 2021 },
//   { id: 3, title: 'Women\'s Day', category: 'TV Shows', year: 2021 },
//   { id: 4, title: 'The Perfect Match', category: 'Anime', year: 2021 },

// ];

const HomeCategoryTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState("War Movie");

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
      <h2>Upcoming Movies</h2>

{/* Filter buttons */}
<div className="filter-buttons">
  <button onClick={() => handleFilterChange("All")}>All</button>
  <button onClick={() => handleFilterChange("Comedy Movie")}>
    Comedy
  </button>
  <button onClick={() => handleFilterChange("Fantasy Movie")}>
    Fantasy
  </button>
  <button onClick={() => handleFilterChange("War Movie")}>
    War
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
