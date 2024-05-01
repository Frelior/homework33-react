import { styled } from "styled-components"

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
        <hr />
        However now it seems a bit weird, i'm sure that I'll have to remake it
        later.
      </p>
    </StyledHome>
  )
}
