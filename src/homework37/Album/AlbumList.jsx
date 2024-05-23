import Album from "./Album"
import List from "../List/List.jsx"
import axios from "axios"
import { useState, useEffect } from "react"

export default function AlbumList({ userId }) {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((data) => {
        setAlbums(data.data)
      })
  })
  return (
    <List className="bg-dark p-2">
      {albums.map((album) => (
        <Album
          key={album.id}
          album={album}
        ></Album>
      ))}
    </List>
  )
}
