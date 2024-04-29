import { styled } from "styled-components"
import SmileButton from "./SmileButton"

const StyledVoteForSmile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    padding: 0;
    margin: 0;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 1rem;
    list-style: none;
    font-size: 3rem;
    // border: 1px solid black;
  }
`

export default function VoteForSmile() {
  return (
    <StyledVoteForSmile>
      <h1 className="mt-3 mb-5">Vote for best emoji</h1>
      <ul>
        <li>
          <SmileButton>&#128125;</SmileButton>
        </li>
        <li>
          <SmileButton>&#128122;</SmileButton>
        </li>
        <li>
          <SmileButton>&#128121;</SmileButton>
        </li>
        <li>
          <SmileButton>&#128169;</SmileButton>
        </li>
        <li>
          <SmileButton>&#129313;</SmileButton>
        </li>
      </ul>
    </StyledVoteForSmile>
  )
}
