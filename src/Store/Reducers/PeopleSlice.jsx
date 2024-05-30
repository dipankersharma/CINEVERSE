import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: null,
};

export const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.information = action.payload;
    },
    removeperson: (state, action) => {
      state.information = null;
    },
  },
});

// Action creators are generated for each case reducer function

export const { loadperson, removeperson } = PeopleSlice.actions;
export default PeopleSlice.reducer;
