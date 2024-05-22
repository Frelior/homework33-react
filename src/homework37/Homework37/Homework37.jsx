import { StyledHomeWork37 } from "./Homework37.js"
import { useEffect, useState } from "react"

export default function HomeWork37() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users))
  }, [])

  async function fetchUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await data.json()
    return users
  }

  return (
    <StyledHomeWork37>
      <h1>Homework37</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </StyledHomeWork37>
  )
}
