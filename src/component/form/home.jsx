import React, { useEffect, useState } from "react";
import Header from "../common/header";

import HomeContainer from "./HomeContainer";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/home/services";

const Home = () => {
  const movies = useSelector((state) => state.home.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(movies && movies.results && movies.results.length > 0)) {
      dispatch(fetchMovies());
    }
  }, []);
  return (
    <>
      <Header />
      <HomeContainer movies={movies} />;
    </>
  );
};

export default Home;