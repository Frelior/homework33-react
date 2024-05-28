import { createSlice } from "@reduxjs/toolkit"

export const clickCounterSlice = createSlice({
  name: "clickCounter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

export const { increment, decrement } = clickCounterSlice.actions
export default clickCounterSlice.reducer
