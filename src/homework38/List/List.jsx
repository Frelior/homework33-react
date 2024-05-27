import { StyledList } from "./StyledList"
import { useSelector } from "react-redux"
import ToDoListItem from "../ToDoListItem/ToDoListItem"

export default function List({ children }) {
  const todos = useSelector((state) => {
    return state.todos
  })

  return (
    <StyledList>
      {todos?.map((item) => {
        return (
          <ToDoListItem
            key={item.id}
            object={item}
          />
        )
      })}
    </StyledList>
  )
}
