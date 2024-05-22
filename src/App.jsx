import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routesConfig from "./routesConfig.js"
import { Header, Main, NavBar, ArticleSection } from "./export.js"

const router = createBrowserRouter(routesConfig)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
