import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  information: null,
}

export const PeopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadpeople: (state,action)=>{
        state.information= action.payload
     },
     removepeople: (state,action)=>{
        state.information= null
     }
}})

// Action creators are generated for each case reducer function

export const{ loadpeople, removepeople } = PeopleSlice.actions
export default PeopleSlice.reducer