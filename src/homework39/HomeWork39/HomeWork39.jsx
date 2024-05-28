import { StyledHomeWork39 } from "./HomeWork39.js"
import TaskForm from "../Form/MyForm.jsx"
import List from "../List/List.jsx"
import { Provider } from "react-redux"
import store from "../store/index.js"

export default function HomeWork39() {
  return (
    <Provider store={store}>
      <StyledHomeWork39>
        <TaskForm></TaskForm>
        <List></List>
      </StyledHomeWork39>
    </Provider>
  )
}
