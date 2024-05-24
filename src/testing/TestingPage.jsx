import React, { createContext, useState } from "react"
import Button from "./Button.jsx"
import Text from "./Text.jsx"

export const ButtonClicksContext = createContext()

const TestingPage = () => {
  const [clicks, setClicks] = useState(1)

  const handleClick = () => {
    setClicks((prev) => prev + 1)
    console.log(clicks)
  }

  const value = { clicks, handleClick }

  return (
    <ButtonClicksContext.Provider value={value}>
      <Button></Button>
      <Text></Text>
    </ButtonClicksContext.Provider>
  )
}

export default TestingPage
