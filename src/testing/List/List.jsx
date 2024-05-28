import Post from "../Post/Post"
import { useEffect } from "react"
import { fetchPosts } from "../store/posts/postsSlice"
import { useDispatch, useSelector } from "react-redux"

export default function List() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  const status = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <ul>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>{error}</div>}
      {status === "success" &&
        posts.map((post) => (
          <Post
            key={post.id}
            obj={post}
          ></Post>
        ))}
    </ul>
  )
}
