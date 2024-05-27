import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload)
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
      return state
    },
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
