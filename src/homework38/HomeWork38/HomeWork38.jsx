import { StyledHomeWork35 } from "./HomeWork38"
import TaskForm from "../Form/MyForm"
import ToDoListItem from "../ToDoListItem/ToDoListItem"
import List from "../List/List"
import { useState } from "react"
import { Provider } from "react-redux"
import store from "../store/index.js"

export default function HomeWork35() {
  function sortTasks(tasks) {
    return [...tasks].sort((a, b) => b.completed - a.completed)
  }

  return (
    <Provider store={store}>
      <StyledHomeWork35>
        {/* <TaskForm></TaskForm> */}
        <List></List>
      </StyledHomeWork35>
    </Provider>
  )
}
