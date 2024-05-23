import { StyledUser } from "./User.js"
import { Link } from "react-router-dom"
import Button from "../../homework33-34/Button/Button.jsx"

export default function User({ user, ...props }) {
  return (
    <StyledUser {...props}>
      <h5>{user.name}</h5>
      <Button className=" btn btn-primary m-0 btn-sm">
        <Link
          className="text-white"
          to={`user/${user.id}`}
        >
          asd
        </Link>
      </Button>
    </StyledUser>
  )
}
