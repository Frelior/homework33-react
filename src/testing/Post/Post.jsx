export default function Post({ obj }) {
  return (
    <div className="border">
      <h5>{obj.name}</h5>
      <p>{obj.username}</p>
    </div>
  )
}
