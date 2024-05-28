import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const TvSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {
    loadTvShow: (state,action)=>{
        state.information= action.payload
     },
     removeTvShow: (state,action)=>{
        state.information= null
     }
}})

// Action creators are generated for each case reducer function

export const { loadTvShow, removeTvShow } = TvSlice.actions;
export default TvSlice.reducer