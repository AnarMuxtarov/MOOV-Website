import React from 'react';
import "../TvShowPagination/Pagination.css";

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];

  // Ümumi səhifə sayını hesablayın
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
       
        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button 
            onClick={() => paginate(currentPage + 1)} 
            className="page-link" 
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

