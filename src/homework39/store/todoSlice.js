import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

function sortTasks(state) {
  state.sort((a, b) => b.completed - a.completed)
}

// Thunks are fetching data, and if they are successful, they synhronize it with store
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
      sortTasks(data)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async (object, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://6655d8893c1d3b60293b52cd.mockapi.io/myTodo/todos/${object.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...object,
            completed: !object.completed,
          }),
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const task = await response.json()
      dispatch(toggleTodo(task.id))
      return task
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const removeAsyncTodo = createAsyncThunk(
  "todos/removeAsyncTodo",
  async (object, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://6655d8893c1d3b60293b52cd.mockapi.io/myTodo/todos/${object.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const task = await response.json()
      dispatch(removeTodo(task.id))
      console.log("removed from both", task)
      return task
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (object, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://6655d8893c1d3b60293b52cd.mockapi.io/myTodo/todos/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...object,
          }),
        }
      )
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const task = await response.json()
      dispatch(addTodo(task))
      return task
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const errorCase = (state, action) => {
  state.status = "rejected"
  state.error = action.payload || action.error.message
  console.log(state.error)
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
      sortTasks(state.todos)
      return state
    },
    removeTodo(state, action) {
      const result = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = result
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
      sortTasks(state.todos)
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
        errorCase(state, action)
      })
      .addCase(toggleAsyncTodo.rejected, (state, action) =>
        errorCase(state, action)
      )
      .addCase(removeAsyncTodo.rejected, (state, action) =>
        errorCase(state, action)
      )
      .addCase(addAsyncTodo.rejected, (state, action) =>
        errorCase(state, action)
      )
  },
})

export { fetchTodos, toggleAsyncTodo, removeAsyncTodo, addAsyncTodo }
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
