import { VoteForSmile, Home, HomeWork35, HomeWork36 } from "./export.js"

const routesConfig = [
  {
    path: "/homework33-react",
    element: <Home />,
    exact: true,
  },
  {
    path: "/homework33-react/VoteForSmile",
    element: <VoteForSmile />,
  },
  {
    path: "/homework33-react/To-do-List",
    element: <HomeWork35 />,
  },
  {
    path: "/homework33-react/Formik",
    element: <HomeWork36 />,
  },
]

export default routesConfig
