import { StyledToDoListItem } from "./StyledToDoListItem"
import { useDispatch } from "react-redux"
import { removeTodo, toggleAsyncTodo } from "../store/todoSlice"

export default function ToDoListItem({ object, ...props }) {
  const dispatch = useDispatch()

  return (
    <StyledToDoListItem
      onClick={() =>
        dispatch(
          toggleAsyncTodo({ id: object.id, currentCompleted: object.completed })
        )
      }
    >
      <div className={`card ${object.completed ? "bg-success" : "bg-warning"}`}>
        <div className="card-body">
          <p>
            <span>{object.completed ? "Completed" : "To do"}</span>
          </p>
          <h3 className="card-title">{object.title}</h3>
        </div>
      </div>
      <button
        className="btn btn-danger delete-btn"
        onClick={(e) => {
          e.stopPropagation()
          dispatch(removeTodo(object.id))
        }}
      >
        Delete
      </button>
    </StyledToDoListItem>
  )
}
