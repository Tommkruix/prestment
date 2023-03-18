import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "@store/slices/blog.slice";

const store = configureStore({
  reducer: {
    blogData: blogReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
