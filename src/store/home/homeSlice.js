import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./services";

const initialState = {
  movies: {},
  loading: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (_home) => {
    _home.addCase(fetchMovies.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    _home.addCase(fetchMovies.fulfilled, (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        movies: payload,
      };
    });
    _home.addCase(fetchMovies.rejected, (state) => {
      return {
        ...state,
        loading: false,
        movies: {},
      };
    });
  },
});

export default homeSlice.reducer;