import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  posts: [],
  loading: 'idle'
};

export const fetchPosts = createAsyncThunk('test/fetchPosts', async() => {
    throw Error('Data not found')
    // return await fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => response.json())
})

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
    builder.addCase(fetchPosts.pending, (state) => {
        state.loading = 'pending'
    })
    builder.addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.posts = payload
        state.loading = 'idle'
    })
    builder.addCase(fetchPosts.rejected, (state) => {
        state.loading = 'failed'
    })
  }
});

export const { increment, decrement, set, reset } = testSlice.actions;

export default testSlice.reducer;
