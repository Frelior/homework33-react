import { StyledHomeWork35 } from "./HomeWork35"
import TaskForm from "../Form/MyForm"
import ToDoListItem from "../ToDoListItem/ToDoListItem"
import List from "../List/List"

const toDoImitate = [
  { id: 1, title: "Задача", completed: false },
  { id: 2, title: "Задача", completed: false },
  { id: 3, title: "Задача", completed: false },
  { id: 4, title: "Задача", completed: true },
  { id: 5, title: "Задача", completed: false },
]

export default function HomeWork35() {
  return (
    <StyledHomeWork35>
      <TaskForm></TaskForm>
      <List>
        {toDoImitate.map((item) => {
          return (
            <ToDoListItem
              key={item.id}
              object={item}
            />
          )
        })}
      </List>
    </StyledHomeWork35>
  )
}
