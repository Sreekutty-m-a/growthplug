import { apiURL, apiKey } from "../config/config";
import apiCaller from "../network/apiCaller";

export const getMovies = async () => {
  try {
    const url =
      apiURL + `movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const res = await apiCaller("GET", url, null);
    return res;
  } catch (error) {
    return error;
  }
};

export const singleMovie = async () =>{
  try{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=fe17c67e56783c08fb10e1d624399ba7&language=en-US`;
    const res = await apiCaller("GET", url, null);
    return res;
  } catch (error) {
    return error;
  }
};