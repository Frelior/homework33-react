import Button from "../Button/Button"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import routesConfig from "../../routesConfig.js"

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

  const routes = routesConfig[0].children

  return (
    <StyledNavBar>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          {routes.map((route) => {
            if (route.path === "*") return
            return (
              <li
                key={route.path}
                className="btn btn-outline-light my-2 p-0"
              >
                <Link
                  to={route.path}
                  className="nav-link fw-bold"
                >
                  {route.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <hr></hr>
      </div>
    </StyledNavBar>
  )
}
