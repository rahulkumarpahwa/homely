import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: null,
  reducers: {
    addMap: (state, actions) => {
      return { state: actions.payload };
    },
    removeMap: () => {
      return null;
    },
  },
});

export const { addMap, removeMap } = mapSlice.actions;

export default mapSlice.reducer;
