import { configureStore } from "@reduxjs/toolkit";
import MovieReducers from "./Reducers/MovieSlice";
import TvReducers from "./Reducers/Tvslice";
import PeopleReducers from "./Reducers/PeopleSlice";

export const store = configureStore({
  reducer: {
    movie: MovieReducers,
    tv: TvReducers,
    people: PeopleReducers,
  },
});
