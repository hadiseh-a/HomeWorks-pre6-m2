import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice.js";
import itemsReducer from "./itemsSlice.js";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    items: itemsReducer,
  },
});

export default store;
