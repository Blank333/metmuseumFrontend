import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./reducers/bookmarkReducer";

const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});

export default store;
