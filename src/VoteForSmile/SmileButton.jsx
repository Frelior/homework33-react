import { styled } from "styled-components"
import { useState } from "react"

const StyledSmileButton = styled.button`
  & hr {
    margin: 0;
    padding: 0;
  }
`

export default function SmileButton({ children }) {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter((prev) => prev + 1)
  }

  return (
    <StyledSmileButton onClick={handleClick}>
      <div>{children}</div>
      <hr />
      <div>{counter}</div>
    </StyledSmileButton>
  )
}
