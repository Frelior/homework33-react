import { StyledToDoListItem } from "./StyledToDoListItem"
import { useState, useEffect } from "react"

// const defff = {
//   id: 1,
//   title: "Задача",
//   completed: false,
// }

export default function ToDoListItem({ object }) {
  const [completed, setCompleted] = useState(object.completed)

  const asda = useEffect(
    (prev) => {
      const localStorage88 = JSON.parse(localStorage.getItem("tasks"))
      localStorage88.find((el) => el.id === object.id).completed = !prev
      localStorage.setItem("tasks", JSON.stringify(localStorage88))
    },
    [completed]
  )

  return (
    <StyledToDoListItem
      onClick={() =>
        setCompleted((prev) => {
          asda(prev)
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
