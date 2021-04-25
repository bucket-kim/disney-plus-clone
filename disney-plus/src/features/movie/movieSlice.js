import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trendig: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (stat, action) => {
      state.recommend = action.playload.recommend;
      state.newDisney = action.playload.newDisney;
      state.original = action.playload.original;
      state.trending = action.playload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trendig;

export default movieSlice.reducer;
