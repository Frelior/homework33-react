import Header from "./LargeParts/Header/Header"
import Main from "./LargeParts/Main/Main"
import NavBar from "./LargeParts/NavBar/NavBar"
import ArticleSection from "./LargeParts/ArticleSection/ArticleSection"
import VoteForSmile from "./VoteForSmile/VoteForSmile"
import Home from "./Home/Home"
import { useState } from "react"

export default function App() {
  const [activePage, setActivePage] = useState("home")

  function handleActivePage(page) {
    setActivePage(page)
  }

  return (
    <>
      <Header />
      <Main>
        <NavBar onActivePage={handleActivePage} />
        <ArticleSection>
          {activePage === "home" && <Home />}
          {activePage === "Homework34" && <VoteForSmile />}
        </ArticleSection>
      </Main>
    </>
  )
}
