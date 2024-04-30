import { styled } from "styled-components"

const StyledSmileButton = styled.button`
  &:hover {
    background-color: lightblue;
  }
  & hr {
    margin: 0;
    padding: 0;
  }
`

export default function SmileButton({
  children,
  counter = 0,
  onClick = null,
  ...props
}) {
  return (
    <StyledSmileButton
      {...props}
      onClick={onClick}
    >
      <div>{children}</div>
      <hr />
      <div>{counter}</div>
    </StyledSmileButton>
  )
}
