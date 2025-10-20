import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";
import mapReducer from "./mapSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
    map: mapReducer,
  },
});
