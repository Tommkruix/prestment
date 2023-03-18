import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogDataType } from "@utils/types";

import blogData from "./blog.data";

const BLOG_NAME = "blog";

type InitialState = {
  loading: boolean;
  blog: BlogDataType;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  blog: {
    blogs: [],
    aboutNumbers: [],
    menus: [],
    profile: [],
  },
  error: "",
};

export const fetchBlogData = createAsyncThunk(
  "blog/fetchBlogData",
  async () => {
    try {
      const data = blogData;
      return data;
    } catch (error) {
      throw new Error("Failed to fetch blog data");
    }
  }
);

const blogSlice = createSlice({
  name: BLOG_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchBlogData.fulfilled,
      (state, action: PayloadAction<BlogDataType>) => {
        state.loading = false;
        state.blog = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchBlogData.rejected, (state, action) => {
      state.loading = false;
      state.blog = initialState.blog;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default blogSlice.reducer;
