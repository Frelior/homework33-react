import { StyledHomeWork37 } from "./Homework37.js"
import UserList from "../User/UserList.jsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"

export default function HomeWork37() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <StyledHomeWork37>
      <h1>Homework37</h1>
      {loading ? "loading users..." : <UserList users={users} />}
      <hr className="w-100" />
      <Outlet />
    </StyledHomeWork37>
  )
}
