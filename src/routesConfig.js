import {
  VoteForSmile,
  Home,
  HomeWork35,
  HomeWork36,
  HomeWork37,
  RootLayout,
  NotFound,
  AlbumList,
} from "./export.js"

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, title: "Home" },
      {
        path: "homeWork34",
        element: <VoteForSmile />,
        title: "HomeWork34",
      },
      { path: "homework35", element: <HomeWork35 />, title: "HomeWork35" },
      { path: "homework36", element: <HomeWork36 />, title: "HomeWork36" },
      {
        path: "homework37",
        element: <HomeWork37 />,
        title: "HomeWork37",
        children: [
          {
            path: "user/:userId",
            element: <AlbumList userId={1}></AlbumList>,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]

export default routesConfig
