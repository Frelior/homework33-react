import React, { useContext } from "react"
import { ButtonClicksContext } from "./TestingPage.jsx"

const Button = () => {
  const { handleClick } = useContext(ButtonClicksContext)

  return <button onClick={handleClick}>Button +1</button>
}

export default Button
