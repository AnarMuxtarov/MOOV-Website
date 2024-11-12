import React, { useState } from 'react';
import Pagination from './Pagination'; 
import { Link } from 'react-router-dom';
import data from '../../data.json';

const PaginatedMovies = () => {
  const [currentPage, setCurrentPage] = useState(1); // cari səhifə
  const [moviesPerPage] = useState(12); // cari səhifədəki datalar

  // Cari səhifədə göstərəcəyiniz məlumatın indeksi  (datanin son indexini tapmaq isteyirik) (datanin  ilk indexini tapmaq isteyirik) yekunda (datanin ilk indexinden son indexine kimi goster)
  const indexOfLastMovie = currentPage * moviesPerPage;  
  // cari sehifedeki mes 1sehifeki filmin son indexsini tapdiq  cari sehife vur nece data varsa ona eledi 12
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  // cari sehifedeki mes 1sehifeki filmin ilk indexsini tapdiq  son index cix sehifede nece element var sayi
  const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);
  // yekun olaraq ilk indexden son indexe kimi goster

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
                { /*Bu hissədə json faylımızdan gələn filmlərin id si ötürür movie.id*/}
                <Link to={`/TvShowPagination/${movie.id}`}><img src={movie.image} alt={movie.title} /></Link>
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
      //  səhifədə göstəriləcək filmlərin sayı
        moviesPerPage={moviesPerPage} 
        // ümumi film sayını təyin edir
        totalMovies={data.length} 
        // səhifəni dəyişdirmək üçün bir funksiya
        paginate={paginate} 
        // Cari səhifənin nömrəsini saxlayır
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginatedMovies;



