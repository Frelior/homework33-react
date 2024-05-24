import Album from "./Album"
import List from "../List/List.jsx"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"

export default function AlbumList() {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const { userId } = useParams()

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, {
        signal: controller.signal,
      })
      .then((data) => {
        setAlbums(data.data)
        setLoading(false)
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.error(err)
        }
        setLoading(false)
      })

    return () => controller.abort()
  }, [userId])

  return (
    <>
      {loading ? (
        "loading albums..."
      ) : (
        <List className="p-2">
          {albums.map((album) => (
            <Album
              key={album.id}
              album={album}
            ></Album>
          ))}
        </List>
      )}
      <Outlet />
    </>
  )
}