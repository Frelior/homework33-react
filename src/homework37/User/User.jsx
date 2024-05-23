import { StyledUser } from "./User.js"
import { Link } from "react-router-dom"

export default function User({ user, ...props }) {
  return (
    <StyledUser {...props}>
      <h5>{user.name}</h5>
      <Link
        className=" btn btn-primary m-0 btn-sm text-white"
        to={`user/${user.id}`}
      >
        Albums
      </Link>
    </StyledUser>
  )
}
