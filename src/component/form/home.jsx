import React, { useEffect, useState } from "react";
import Header from "../common/header";
import { getMovies } from "../../services/movies";
import HomeContainer from "./HomeContainer";

const Home = () => {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovies();
      setMovies(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <HomeContainer movies={movies} />;
    </>
  );
};

export default Home;