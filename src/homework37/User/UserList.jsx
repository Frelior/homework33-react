import List from "../List/List.jsx"
import User from "./User.jsx"

export default function UserList({ users }) {
  return (
    <List>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
        ></User>
      ))}
    </List>
  )
}
