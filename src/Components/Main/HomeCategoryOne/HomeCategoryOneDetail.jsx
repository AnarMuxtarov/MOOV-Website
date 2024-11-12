import React from "react";
import { useParams } from "react-router-dom";
import CardDetail_info from "../../CardDetail/CardDetail_info/CardDetail_info";
import movies from "../../data.json";
import CardDetail_episode from "../../CardDetail/CardDetail_episode/CardDetail_episode";

const HomeCategoryOneDetail = () => {
   // ---useParams url-dən id parametrini alır (RouterComp-də /movie/:id bu hissədən)   --- 
  const { id } = useParams();
 
   // ---Json faylımızdan  id ilə uyğun gələn filmi tapır (filmin idsini url idsi bərabər edir)
  const movie = movies.find((movie) => movie.id === parseInt(id));
  return (
    <>
      <CardDetail_info movie={movie} />
      <CardDetail_episode movie={movie}/>
    </>
  );
};

export default HomeCategoryOneDetail;
