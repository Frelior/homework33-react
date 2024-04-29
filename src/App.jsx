import Header from "./LargeParts/Header/Header"
import Main from "./LargeParts/Main/Main"
import NavBar from "./LargeParts/NavBar/NavBar"
import ArticleSection from "./LargeParts/ArticleSection/ArticleSection"

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <NavBar />
        <ArticleSection>ArticleSection</ArticleSection>
      </Main>
    </>
  )
}
