import React from "react";
import { useParams } from "react-router-dom";
import CardDetail_info from "../../CardDetail/CardDetail_info/CardDetail_info";
import movies from "../../data.json";

const HomeCategoryTwoDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return <CardDetail_info movie={movie} />;
};

export default HomeCategoryTwoDetail;
