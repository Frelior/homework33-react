import { StyledHomeWork37 } from "./Homework37.js"
import UserList from "../User/UserList.jsx"
import { Outlet } from "react-router-dom"

export default function HomeWork37() {
  return (
    <StyledHomeWork37>
      <h1>Homework37</h1>
      <UserList />
      <hr className="w-100" />
      <Outlet />
    </StyledHomeWork37>
  )
}
