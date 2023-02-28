import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  posts: [],
  loading: "idle",
};

export const fetchPosts = createAsyncThunk("test/fetchPosts", async () => {
  const post = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  return post;
});

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    set: (state, action) => {
      state.counter = action.payload;
    },
    reset: (state) => {
      state.counter = initialState.counter;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.loading = "idle";
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

export const { increment, decrement, set, reset } = testSlice.actions;

export default testSlice.reducer;
