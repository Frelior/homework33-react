import Photo from "./Photo.jsx"
import List from "../List/List.jsx"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function PhotoList() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const { albumId } = useParams()

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
        signal: controller.signal,
      })
      .then((data) => {
        setPhotos(data.data)
        setLoading(false)
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.error(err)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [albumId])

  return (
    <>
      {loading ? (
        "loading photos..."
      ) : (
        <List className="p-2">
          {photos.map((photo) => (
            <Photo
              key={photo.id}
              photo={photo}
            ></Photo>
          ))}
        </List>
      )}
    </>
  )
}
