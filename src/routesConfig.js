import {
  VoteForSmile,
  Home,
  HomeWork35,
  HomeWork36,
  HomeWork37,
  Homework38,
  Homework39,
  RootLayout,
  NotFound,
  AlbumList,
  PhotoList,
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
            element: <AlbumList></AlbumList>,
            children: [
              {
                path: "album/:albumId",
                element: <PhotoList></PhotoList>,
              },
            ],
          },
        ],
      },
      { path: "homework38", element: <Homework38 />, title: "HomeWork38" },
      { path: "homework39", element: <Homework39 />, title: "HomeWork39" },
      { path: "*", element: <NotFound /> },
    ],
  },
]

export default routesConfig
