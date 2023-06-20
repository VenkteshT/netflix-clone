import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
};
const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    incr(s, a) {
      s.counter++;
    },
  },
});
export const sliceActions = slice.actions;
const store = configureStore({
  reducer: {
    slice: slice.reducer,
  },
});
export default store;
