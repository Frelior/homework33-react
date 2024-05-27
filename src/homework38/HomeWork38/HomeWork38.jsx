import { StyledHomeWork35 } from "./HomeWork38"
import TaskForm from "../Form/MyForm"
import List from "../List/List"
import { Provider } from "react-redux"
import store from "../store/index.js"

export default function HomeWork35() {
  return (
    <Provider store={store}>
      <StyledHomeWork35>
        <TaskForm></TaskForm>
        <List></List>
      </StyledHomeWork35>
    </Provider>
  )
}
