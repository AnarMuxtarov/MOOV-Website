import React from "react";
import { useParams } from "react-router-dom";
import CardDetail_info from "../../CardDetail/CardDetail_info/CardDetail_info";
import CardDetail_episode from "../../CardDetail/CardDetail_episode/CardDetail_episode";
import movies from "../../data.json";


const HomeCategoryTwoDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <>
<CardDetail_info movie={movie} />
<CardDetail_episode movie={movie} />;
 </>
  )
};

export default HomeCategoryTwoDetail;
