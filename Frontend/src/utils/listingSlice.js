import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
  name: "listing",
  initialState: null,
  reducers: {
    addListing: (state, actions) => {
      return actions.payload;
    },
    removeListing: () => {
      return null;
    },
    addListingMap: (state, actions) => {
      return { ...state, map: actions.payload };
    },
    removeListingMap: (state) => {
      return { ...state, map: null };
    },
  },
});

export const { addListing, removeListing, addListingMap, removeListingMap } =
  listingSlice.actions;
export default listingSlice.reducer;
