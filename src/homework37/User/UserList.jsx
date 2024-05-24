import List from "../List/List.jsx"
import User from "./User.jsx"
import axios from "axios"
import { useState, useEffect } from "react"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setUsers(data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <List>
      {loading
        ? "loading users..."
        : users.map((user) => (
            <User
              key={user.id}
              user={user}
            ></User>
          ))}
    </List>
  )
}
