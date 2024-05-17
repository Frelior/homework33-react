import Button from "../Button/Button"
import InputSearch from "../InputSearch/InputSearch"
import { styled } from "styled-components"

const StyledHeader = styled.header`
  & h1 {
    margin: 0;
    text-decoration: underline;
  }
`

export default function Header() {
  return (
    <StyledHeader className="p-3 bg-dark text-white">
      <div
        className="container"
        style={{ maxWidth: "100vw" }}
      >
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-between">
          <h1>Rudenko Front-end Pro</h1>

          <div className="d-flex">
            <InputSearch />
            <div className="text-end">
              <Button className="btn btn-outline-light me-2">Login</Button>
              <Button className="btn btn-warning">Sign-up</Button>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}
