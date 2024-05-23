import { StyledAlbum } from "./StyledAlbum.js"

export default function Album({ album }) {
  return (
    <StyledAlbum>
      <h3>{album.title}</h3>
      <p>album id: {album.id}</p>
    </StyledAlbum>
  )
}
