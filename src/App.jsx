import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import { Header, Main, NavBar, ArticleSection } from "./export.js"
import routesConfig from "./routesConfig.js"

const AppRoutes = () => useRoutes(routesConfig)

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Main>
          <NavBar />
          <ArticleSection>
            <AppRoutes />
          </ArticleSection>
        </Main>
      </>
    </Router>
  )
}
