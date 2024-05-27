import { StyledToDoListItem } from "./StyledToDoListItem"
import { useDispatch } from "react-redux"
import { toggleTodo, removeTodo } from "../store/todoSlice"

export default function ToDoListItem({ object, onClick, onDelete, ...props }) {
  const dispatch = useDispatch()

  return (
    <StyledToDoListItem onClick={() => dispatch(toggleTodo(object.id))}>
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
