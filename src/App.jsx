import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {
  Header,
  Main,
  NavBar,
  ArticleSection,
  VoteForSmile,
  Home,
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
            </Routes>
          </ArticleSection>
        </Main>
      </>
    </Router>
  )
}
