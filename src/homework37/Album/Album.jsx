import { StyledAlbum } from "./StyledAlbum.js"
import { Link } from "react-router-dom"

export default function Album({ album }) {
  return (
    <StyledAlbum>
      <h6>Album Title: {album.title}</h6>
      <div className="d-flex justify-content-between w-100 align-items-center">
        <p className="m-0">album id: {album.id}</p>
        <Link
          className="btn btn-primary m-0 btn-sm text-white"
          to={`album/${album.id}`}
        >
          Open album
        </Link>
      </div>
    </StyledAlbum>
  )
}
