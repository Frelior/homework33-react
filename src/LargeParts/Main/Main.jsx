import { styled } from "styled-components"

const StyledMain = styled.main`
  display: flex;
  //   flex-direction: column;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   padding-top: 50px;
  //   padding-bottom: 50px;
  flex-grow: 1;
  background-color: transparent;
`

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>
}
