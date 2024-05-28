import { StyledToDoListItem } from "./StyledToDoListItem"
import { useDispatch } from "react-redux"
import { toggleAsyncTodo, removeAsyncTodo } from "../store/todoSlice"

export default function ToDoListItem({ object, ...props }) {
  const dispatch = useDispatch()

  return (
    <StyledToDoListItem onClick={() => dispatch(toggleAsyncTodo(object))}>
      <div className={`card ${object.completed ? "bg-success" : "bg-warning"}`}>
        <div className="card-body">
          <p>
            <span>{object.completed ? "Completed" : "To do"}</span>
          </p>
          <h5 className="card-title">{object.title}</h5>
        </div>
      </div>
      <button
        className="btn btn-danger delete-btn"
        onClick={(e) => {
          e.stopPropagation()
          dispatch(removeAsyncTodo(object))
        }}
      >
        Delete
      </button>
    </StyledToDoListItem>
  )
}
