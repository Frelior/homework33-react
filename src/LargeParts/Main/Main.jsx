import { styled } from "styled-components"
import HavBar from "../../LargeParts/NavBar/NavBar"

const StyledMain = styled.main`
  display: flex;
  //   flex-direction: column;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   padding-top: 50px;
  //   padding-bottom: 50px;
  flex-grow: 1;
  background-color: #efefef;
`

export default function Main() {
  return (
    <StyledMain>
      <HavBar />
      <div
        className=""
        style={{ backgroundColor: "red", width: "100%" }}
      >
        Main
      </div>
    </StyledMain>
  )
}
