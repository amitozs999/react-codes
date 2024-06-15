import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: { pagenumber: 1 },
  reducers: {
    next: (state, action) => {
      state.pagenumber = state.pagenumber + 1;
    },
    back: (state, action) => {
      state.pagenumber = state.pagenumber - 1;
    },
  },
});
export const { back } = pageSlice.actions;
export const { next } = pageSlice.actions;
export default pageSlice.reducer;
