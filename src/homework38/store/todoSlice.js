import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("tasks")) || [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
      sortTasks(state)
      saveToLocalStorage(state)
      return state
    },
    removeTodo(state, action) {
      const result = state.filter((todo) => todo.id !== action.payload)
      saveToLocalStorage(result)
      return result
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
      sortTasks(state)
      saveToLocalStorage(state)
      return state
    },
  },
})

function sortTasks(state) {
  state.sort((a, b) => b.completed - a.completed)
}

function saveToLocalStorage(state) {
  localStorage.setItem("tasks", JSON.stringify(state))
}

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
