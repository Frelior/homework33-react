import { styled } from "styled-components"
import SmileButton from "./SmileButton"
import Button from "../Button/Button"
import { useState } from "react"

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
  & .disabled {
  }
`

export default function VoteForSmile() {
  const [counters, setCounters] = useState({
    clown: 0,
    beast: 0,
    mask: 0,
    poop: 0,
    police: 0,
    winner: null,
  })
  const emojies = {
    clown: "🤡",
    beast: "👹",
    mask: "👺",
    poop: "💩",
    police: "👮",
  }

  function handleClick(event) {
    const emoji = event.currentTarget.getAttribute("emoji")
    setCounters((prev) => {
      return { ...prev, [emoji]: prev[emoji] + 1 }
    })
  }

  return (
    <StyledVoteForSmile>
      <h1 className="mt-3 mb-5">Vote for best emoji</h1>
      <ul>
        <li>
          <SmileButton
            emoji="clown"
            onClick={handleClick}
            counter={counters.clown}
          >
            {emojies.clown}
          </SmileButton>
        </li>
        <li>
          <SmileButton
            emoji="beast"
            onClick={handleClick}
            counter={counters.beast}
          >
            {emojies.beast}
          </SmileButton>
        </li>
        <li>
          <SmileButton
            emoji="mask"
            onClick={handleClick}
            counter={counters.mask}
          >
            {emojies.mask}
          </SmileButton>
        </li>
        <li>
          <SmileButton
            emoji="poop"
            onClick={handleClick}
            counter={counters.poop}
          >
            {emojies.poop}
          </SmileButton>
        </li>
        <li>
          <SmileButton
            emoji="police"
            onClick={handleClick}
            counter={counters.police}
          >
            {emojies.police}
          </SmileButton>
        </li>
      </ul>
    </StyledVoteForSmile>
  )
}
