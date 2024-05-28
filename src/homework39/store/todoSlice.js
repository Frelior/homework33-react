import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

function sortTasks(state) {
  state.sort((a, b) => b.completed - a.completed)
}
function saveToLocalStorage(state) {
  localStorage.setItem("tasks", JSON.stringify(state))
}

const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6655d8893c1d3b60293b52cd.mockapi.io/myTodo/todos"
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// const toggleAsyncTodo = createAsyncThunk(
//   "todos/toggleAsyncTodo",
//   async ({ id, currentCompleted }, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await fetch(
//         `https://6655d8893c1d3b60293b52cd.mockapi.io/myTodo/todos/${id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             completed: !currentCompleted,
//           }),
//         }
//       )
//       if (!response.ok) {
//         throw new Error("Network response was not ok")
//       }

//       const task = await response.json()
//       dispatch(toggleTodo(task.id))
//       return task
//     } catch (error) {
//       console.log(error)
//       return rejectWithValue(error.message)
//     }
//   }
// )

const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async ({ id, currentCompleted }, { rejectWithValue, dispatch }) => {
    try {
    } catch (error) {}
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
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
      const todo = state.todos.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
      sortTasks(state.todos)
      // saveToLocalStorage(state)
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = "success"
        state.error = null
      })
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload || action.error.message
        console.log(state.error)
      })
  },
})

export { fetchTodos, toggleAsyncTodo }
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
