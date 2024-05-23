import { StyledAlbum } from "./StyledAlbum.js"

export default function Album({ album }) {
  return (
    <StyledAlbum>
      <h6>Album Title: {album.title}</h6>
      <p>album id: {album.id}</p>
    </StyledAlbum>
  )
}
