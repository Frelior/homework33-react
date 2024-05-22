import Header from "../Header/Header.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import Main from "../Main/Main.jsx"
import ArticleSection from "../ArticleSection/ArticleSection.jsx"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <Header />
      <Main>
        <NavBar />
        <ArticleSection>
          <Outlet />
        </ArticleSection>
      </Main>
    </>
  )
}
