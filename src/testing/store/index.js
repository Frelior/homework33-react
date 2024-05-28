import { configureStore } from "@reduxjs/toolkit"
import clickCounterReduced from "./clickCounter/clickCounterSlice.js"
import postsReducer from "./posts/postsSlice.js"

export default configureStore({
  reducer: {
    clickCounter: clickCounterReduced,
    posts: postsReducer,
  },
})
