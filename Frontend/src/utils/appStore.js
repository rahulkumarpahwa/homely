import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
  },
});
