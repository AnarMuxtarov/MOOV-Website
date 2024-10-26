import React from "react";
import { useParams } from "react-router-dom";
import CardDetail_info from "../../CardDetail/CardDetail_info/CardDetail_info";
import movies from "../../data.json";
import CardDetail_episode from "../../CardDetail/CardDetail_episode/CardDetail_episode";

const HomeCategoryOneDetail = () => {
  const { id } = useParams();
  console.log(useParams());
  const movie = movies.find((movie) => movie.id === parseInt(id));
  return (
    <>
      <CardDetail_info movie={movie} />
      <CardDetail_episode movie={movie}/>
    </>
  );
};

export default HomeCategoryOneDetail;
