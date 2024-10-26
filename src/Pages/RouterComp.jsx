import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Movie from "../Pages/Movie/Movie";
import TvShow from "./TvShow/TvShow";
import Pricing from "./Pricing/Pricing";
import Contacts from "../Pages/Contacts/Contacts";
import SignIn from "../Components/SignIn/SignIn";
import HomeCategoryOneDetail from "../Components/Main/HomeCategoryOne/HomeCategoryOneDetail";
import HomeCategoryTwoDetail from "../Components/Main/HomeCategoryTwo/HomeCategoryTwoDetail";
import MovieSearchDetail from "../Components/Movie/MovieSearch/MovieSearchDetail";
import PaginatedMoviesDetail from "../Components/TvShow/TvShowPagination/PaginatedMoviesDetail";
import NotFound from "../Components/NotFound";


const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/tvShow" element={<TvShow />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signIN" element={<SignIn />} />
      <Route path="/movie/:id" element={<HomeCategoryOneDetail />} />
      <Route path="/movie/:id" element={<HomeCategoryTwoDetail />} />
      <Route path="/movieSearch/:id" element={<MovieSearchDetail />} />
      <Route path="/TvShowPagination/:id" element={<PaginatedMoviesDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterComp;
