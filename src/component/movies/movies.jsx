import React, { useEffect, useState } from "react";
import Header from "../common/header";
import { useParams } from "react-router-dom";
import MovieContainer from "./movieContainer";
import { singleMovie } from "../../services/movies";

const Movie = () => {
    const {id} = useParams();
  const [movie, setSingleMovie] = useState({});
  useEffect(() => {
        const fetchData = async () => {
        const res = await singleMovie(id);
        setSingleMovie(res);
        console.log(movie)
    };
    fetchData();
  }, [id]);
  if (typeof is !=='undefined'){
    fetchData();
  }
  return (
    <>
      <Header />
      <MovieContainer movie={movie} />;
    </>
  );
};

export default Movie;