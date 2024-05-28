import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
   loadMovie: (state,action)=>{
      state.information= action.payload
   },
   removeMovie: (state,action)=>{
      state.information= null
   }
}})


// Action creators are generated for each case reducer function

export const{ loadMovie, removeMovie} = MovieSlice.actions
export default MovieSlice.reducer