import React, { useState } from 'react';

 // Pagination komponenti
import Pagination from './Pagination'; 


// data.json faylını import edin
import data from './data.json';

const PaginatedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1); // cari səhifə
  const [moviesPerPage] = useState(12); // hər səhifədə neçə element olmalıdır

  // Cari səhifədə göstərəcəyiniz məlumatın indeksi
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);

  // Səhifəni dəyişmək funksiyası
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id='TvShow-paginated'>
      <div className="tv-contents">
      <span>ONLINE STREAMING</span>
      <h2>Tv Show All Pages</h2>
      </div>
      <div className="movies-grid">
        <div className="container">
        {currentMovies.map(movie => (
          <div key={movie.id} className="movie-card">
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

      {/* Səhifələmə düymələri */}
      <Pagination 
        moviesPerPage={moviesPerPage} 
        totalMovies={data.length} 
        paginate={paginate} 
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginatedMovies;



