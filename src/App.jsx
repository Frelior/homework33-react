import Header from "./LargeParts/Header/Header"
import Main from "./LargeParts/Main/Main"
import NavBar from "./LargeParts/NavBar/NavBar"
import ArticleSection from "./LargeParts/ArticleSection/ArticleSection"
import VoteForSmile from "./VoteForSmile/VoteForSmile"
import Home from "./Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App() {
  const [activePage, setActivePage] = useState("home")

  function handleActivePage(page) {
    setActivePage(page)
  }

  return (
    <Router>
      <>
        <Header />
        <Main>
          <NavBar onActivePage={handleActivePage} />
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
