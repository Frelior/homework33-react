import { StyledHomeWork37 } from "./Homework37.js"
import User from "../User/User.jsx"
import UserList from "../User/UserList.jsx"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import List from "../List/List.jsx"
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
      <Outlet />
    </StyledHomeWork37>
  )
}
