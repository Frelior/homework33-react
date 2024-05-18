import { StyledToDoListItem } from "./StyledToDoListItem"
import { useState } from "react"

// const defff = {
//   id: 1,
//   title: "Задача",
//   completed: false,
// }

export default function ToDoListItem({ object }) {
  const [completed, setCompleted] = useState(object.completed)

  return (
    <StyledToDoListItem
      onClick={() =>
        setCompleted((prev) => {
          object.completed = !prev
          console.log(object)
          return !prev
        })
      }
    >
      <div className={`card ${completed ? "bg-success" : "bg-warning"}`}>
        <div className="card-body">
          <p>
            Task # {object.id} <span>{completed ? "Completed" : "To do"}</span>
          </p>
          <h3 className="card-title">{object.title}</h3>
        </div>
      </div>
    </StyledToDoListItem>
  )
}
