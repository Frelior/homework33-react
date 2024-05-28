import Button from "./Button.jsx"
import Text from "./Text.jsx"
import List from "./List/List.jsx"
import { Provider } from "react-redux"
import store from "./store/index.js"

const TestingPage = () => {
  return (
    <Provider store={store}>
      <Button></Button>
      <Text></Text>
      <List></List>
    </Provider>
  )
}

export default TestingPage
