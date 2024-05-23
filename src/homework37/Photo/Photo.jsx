import { StyledPhoto } from "./StyledPhoto.js"
export default function Photo({ photo }) {
  return (
    <StyledPhoto>
      <h6>Photo id: {photo.id}</h6>
      <img
        src={photo.thumbnailUrl}
        alt={photo.id}
        className="img-fluid rounded"
      />
    </StyledPhoto>
  )
}
