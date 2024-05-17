import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {
  Header,
  Main,
  NavBar,
  ArticleSection,
  VoteForSmile,
  Home,
  HomeWork35,
} from "./export.js"

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Main>
          <NavBar />
          <ArticleSection>
            <Routes>
              <Route
                path="/homework33-react"
                element={<Home />}
              />
              <Route
                path="/homework33-react/VoteForSmile"
                element={<VoteForSmile />}
              />
              <Route
                path="/homework33-react/To-do-List"
                element={<HomeWork35 />}
              />
            </Routes>
          </ArticleSection>
        </Main>
      </>
    </Router>
  )
}
