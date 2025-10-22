import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
  name: "listing",
  initialState: null,
  reducers: {
    addListing: (state, actions) => {
      return actions.payload;
    },
    removeListing: (state, actions) => {
      const newStateArr = state.filter((obj) => obj._id != actions.payload);
      return newStateArr;
    },
  },
});

export const { addListing, removeListing } = listingSlice.actions;
export default listingSlice.reducer;
