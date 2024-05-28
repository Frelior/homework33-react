import { useDispatch } from "react-redux"
import { increment } from "./store/clickCounter/clickCounterSlice"

const Button = () => {
  const dispatch = useDispatch()

  return <button onClick={() => dispatch(increment())}>Button +1</button>
}

export default Button
