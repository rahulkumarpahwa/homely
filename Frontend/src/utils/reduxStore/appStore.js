import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./listingSlice";
import mapReducer from "./mapSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    listing: listingReducer,
    map: mapReducer,
    user: userReducer,
  },
});
