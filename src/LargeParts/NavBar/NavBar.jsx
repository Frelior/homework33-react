import Button from "../../Button/Button"
import { styled } from "styled-components"

const StyledNavBar = styled.nav`
  //   flex-grow: 1;
  display: flex;
  flex-direction: column;
  & div {
    flex-grow: 1;
  }
  & button {
    width: 100%;
  }
`

export default function NavBar() {
  return (
    <StyledNavBar>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "150px" }}
      >
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Button>one</Button>
          </li>
          <li>
            <Button>two</Button>
          </li>
          <li>
            <Button>three</Button>
          </li>
          {/* <li class="nav-item">
          <a
            href="#"
            class="nav-link active"
            aria-current="page"
          >
            <svg
              class="bi me-2"
              width="16"
              height="16"
            >
              <use xlink:href="#home"></use>
            </svg>
            Home
          </a>
        </li> */}
        </ul>
        <hr></hr>
      </div>
    </StyledNavBar>
  )
}
