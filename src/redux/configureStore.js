import { configureStore } from "@reduxjs/toolkit";
import { youtubeApi } from "../services/youtubeApi";
const store = configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
});

export default store;
