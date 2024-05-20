import { StyledHomeWork35 } from "./HomeWork35"
import TaskForm from "../Form/MyForm"
import ToDoListItem from "../ToDoListItem/ToDoListItem"
import List from "../List/List"
import { useState } from "react"

export default function HomeWork35() {
  const [localStorageTasks, setLocalStorageTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  function sortTasks(tasks) {
    return [...tasks].sort((a, b) => b.completed - a.completed)
  }

  // click handlers
  const handleTaskClick = (taskId) => {
    setLocalStorageTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
      const sortedTasks = sortTasks(updatedTasks)
      localStorage.setItem("tasks", JSON.stringify(sortedTasks))
      return sortedTasks
    })
  }

  const handleTaskDelete = (taskId) => {
    setLocalStorageTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId)
      localStorage.setItem("tasks", JSON.stringify(updatedTasks))
      return updatedTasks
    })
  }

  return (
    <StyledHomeWork35>
      <TaskForm setStorage={setLocalStorageTasks}></TaskForm>
      <List>
        {localStorageTasks.map((item) => {
          return (
            <ToDoListItem
              key={item.id}
              object={item}
              onClick={() => handleTaskClick(item.id)}
              onDelete={() => handleTaskDelete(item.id)}
            />
          )
        })}
      </List>
    </StyledHomeWork35>
  )
}
