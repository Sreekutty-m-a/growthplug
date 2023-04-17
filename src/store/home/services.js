import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL, apiKey } from "../../config/config";
import apiCaller from "../../network/apiCaller";

// First, create the thunk
export const fetchMovies = createAsyncThunk(
  "movies",
  async (_, { rejectWithValue }) => {
    try {
      const url =
        apiURL + `movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      const res = await apiCaller("GET", url, null);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);