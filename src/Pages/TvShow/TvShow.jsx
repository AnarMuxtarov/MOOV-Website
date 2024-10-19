import React from "react";
import TvShowBanner from "../../Components/TvShow/TvShowBanner/TvShowBanner";
import PaginatedMovies from "../../Components/TvShow/TvShowPagination/PaginatedMovies";
import Membership from "../../Components/Main/Membership/Membership";

const TvShow = () => {
  return (
    <>
      <TvShowBanner />
      <PaginatedMovies />
      <Membership />
    </>
  );
};

export default TvShow;
