import { StyledToDoListItem } from "./StyledToDoListItem"

export default function ToDoListItem({ object, onClick, onDelete, ...props }) {
  return (
    <StyledToDoListItem onClick={null}>
      {/* <div className={`card ${object.completed ? "bg-success" : "bg-warning"}`}>
        <div className="card-body">
          <p>
            <span>{object.completed ? "Completed" : "To do"}</span>
          </p>
          <h3 className="card-title">{object.title}</h3>
        </div>
      </div>
      <button
        className="btn btn-danger delete-btn"
        onClick={() => onDelete(object.id)}
      >
        Delete
      </button> */}
      <p>meow</p>
    </StyledToDoListItem>
  )
}
