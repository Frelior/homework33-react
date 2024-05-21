import Button from "../Button/Button"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

const StyledNavBar = styled.nav`
  position: relative;
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
  const navigate = useNavigate()

  function setActiveTab(page) {
    navigate(page)
  }

  return (
    <StyledNavBar>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "150px" }}
      >
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Button
              className="btn btn-outline-light my-2"
              onClick={() => setActiveTab("/homework33-react")}
            >
              Home page
            </Button>
          </li>

          <li>
            <Button
              className="btn btn-outline-light my-2"
              onClick={() => setActiveTab("/homework33-react/VoteForSmile")}
            >
              Homework34
              <hr className="my-0" />
              Vote for smile
            </Button>
          </li>

          <li>
            <Button
              className="btn btn-outline-light my-2"
              onClick={() => setActiveTab("/homework33-react/To-do-List")}
            >
              Homework35
              <hr className="my-0" />
              To-do List
            </Button>
          </li>

          <li>
            <Button
              className="btn btn-outline-light my-2"
              onClick={() => setActiveTab("/homework33-react/Formik")}
            >
              Homework36
              <hr className="my-0" />
              Formik
            </Button>
          </li>
        </ul>
        <hr></hr>
      </div>
    </StyledNavBar>
  )
}
