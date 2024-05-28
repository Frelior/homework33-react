import { useSelector } from "react-redux"

const Text = () => {
  const clicks = useSelector((state) => state.clickCounter)

  return (
    <div>
      <h1>{clicks}</h1>
    </div>
  )
}

export default Text
