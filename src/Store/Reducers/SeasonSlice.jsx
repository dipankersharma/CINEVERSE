import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: null,
};

export const SeasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    loadSeason: (state, action) => {
      state.information = action.payload;
    },
    removeSeason: (state, action) => {
      state.information = null;
    },
  },
});

export default SeasonSlice.reducer;
export const { loadSeason, removeSeason } = SeasonSlice.actions;
