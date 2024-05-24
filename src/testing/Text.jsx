import React, { useContext } from "react"
import { ButtonClicksContext } from "./TestingPage.jsx"

const Text = () => {
  const { clicks } = useContext(ButtonClicksContext)
  return (
    <div>
      <h1>{clicks}</h1>
    </div>
  )
}

export default Text
