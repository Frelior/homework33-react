import Header from "./LargeParts/Header/Header"
import Main from "./LargeParts/Main/Main"
import NavBar from "./LargeParts/NavBar/NavBar"
import ArticleSection from "./LargeParts/ArticleSection/ArticleSection"
import VoteForSmile from "./VoteForSmile/VoteForSmile"

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <NavBar />
        <ArticleSection>
          <VoteForSmile />
        </ArticleSection>
      </Main>
    </>
  )
}
