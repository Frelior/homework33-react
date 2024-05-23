import { Link, useRouteError } from "react-router-dom"

export default function NotFound() {
  const error = useRouteError()
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>{error.message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
