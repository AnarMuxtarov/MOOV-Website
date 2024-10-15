import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../TvShow/TvShowPagination/data.json";

const HomeCategoryOneDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  return (
    <div>
      <h2>{movie.title}</h2>
     <img src={movie.image}alt="" /> 
     <p>
        {
            movie.category
        }
     </p>
    </div>
  );
};

export default HomeCategoryOneDetail;
