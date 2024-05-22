import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routesConfig from "./routesConfig.js"

const basename = "/homework33-react"
const router = createBrowserRouter(routesConfig, { basename })

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
