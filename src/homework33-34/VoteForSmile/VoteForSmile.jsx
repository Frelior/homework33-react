import { styled } from "styled-components"
import Button from "../Button/Button"
import { useState } from "react"
import ModalWindow from "../ModalWindow/ModalWindow"

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
    // border: 1px solid black;
  }
  & li * {
    font-size: 2rem;
    text-align: center;
  }
  hr {
    margin: 0;
  }
`

export default function VoteForSmile() {
  const [showModal, setShowModal] = useState(false)
  const [winner, setWinner] = useState(null)
  const [alert, setAlert] = useState(null)
  const [counters, setCounters] = useState({
    clown: 0,
    beast: 0,
    mask: 0,
    poop: 0,
    police: 0,
  })
  const emojies = {
    clown: "🤡",
    beast: "👹",
    mask: "👺",
    poop: "💩",
    police: "👮",
  }

  function handleClickCounter(event) {
    const emojiValue = event.target.getAttribute("emoji")
    setCounters({
      ...counters,
      [emojiValue]: counters[emojiValue] + 1,
    })
  }

  function openModal() {
    const settedWinner = countVotes()
    if (settedWinner) {
      setWinner(settedWinner)
      setShowModal((prev) => !prev)
      setAlert(null)
    } else {
      setAlert("There is no winner yet")
    }
  }

  function countVotes() {
    let maxKey = null
    let maxValue = [-Infinity]

    for (const key in counters) {
      if (counters[key] > maxValue[0]) {
        maxKey = key
        maxValue = [counters[key]]
      } else if (counters[key] === maxValue[0]) {
        maxValue.push(counters[key])
      }
    }

    if (maxValue.length > 1) {
      maxKey = null
    }
    return maxKey
  }

  return (
    <StyledVoteForSmile>
      <h1 className="mt-3 mb-5">Vote for best emoji</h1>

      <ul>
        {Object.keys(emojies).map((key) => {
          return (
            <li key={key}>
              <Button
                emoji={key}
                onClick={handleClickCounter}
              >
                {emojies[key]}
              </Button>
              <hr />
              <p>{counters[key]}</p>
            </li>
          )
        })}
      </ul>

      <Button
        className="btn btn-outline-dark my-2"
        onClick={openModal}
      >
        Show results
      </Button>

      {/*modal window */}
      {showModal && winner ? (
        <ModalWindow open={showModal}>
          <h2>WINNER</h2>
          <h3>{emojies[winner]}</h3>
          <p>with {counters[winner]} votes</p>
          <Button onClick={openModal}>AWESOME</Button>
        </ModalWindow>
      ) : null}

      {/* alert if there is no winner */}
      {alert ? <p className="text-danger">{alert}</p> : null}
    </StyledVoteForSmile>
  )
}
