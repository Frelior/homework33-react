import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"

const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.ty2picode.com/users"
      )
      if (!responce.ok) {
        throw new Error("can't fetch posts")
      }
      const data = await responce.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.status = "success"
        state.error = null
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error"
        state.error = action.payload || "Something went wrong"
        console.log(state.error)
      })
  },
})

export default postsSlice.reducer
export { fetchPosts }
