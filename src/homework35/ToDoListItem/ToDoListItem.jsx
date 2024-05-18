import { StyledToDoListItem } from "./StyledToDoListItem"

export default function ToDoListItem() {
  return (
    <StyledToDoListItem>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </StyledToDoListItem>
  )
}
