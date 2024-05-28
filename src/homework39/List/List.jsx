import { StyledList } from "./StyledList"
import { useSelector, useDispatch } from "react-redux"
import { fetchTodos } from "../store/todoSlice"
import { useEffect } from "react"
import ToDoListItem from "../ToDoListItem/ToDoListItem"

export default function List() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const todoState = useSelector((state) => {
    return state.todos
  })

  return (
    <StyledList>
      {todoState.status === "loading" && todoState.todos && <h4>Loading...</h4>}
      {todoState.status === "rejected" && (
        <h4>Oops, something went wrong. Server error: {todoState.error}</h4>
      )}
      {todoState.status === "success" &&
        todoState.todos?.map((item) => (
          <ToDoListItem
            key={item.id}
            object={item}
          />
        ))}
    </StyledList>
  )
}
