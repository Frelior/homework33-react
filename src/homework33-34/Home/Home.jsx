import { styled } from "styled-components"
import { Outlet } from "react-router-dom"
const StyledHome = styled.div`
  padding-top: 3rem;
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
`

export default function Home() {
  return (
    <StyledHome className="text-center">
      <h1>Home Page</h1>
      <p>
        Im planning to make navigation by buttons in left side of the screen.
      </p>
      <Outlet />
    </StyledHome>
  )
}
