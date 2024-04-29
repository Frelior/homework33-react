import { styled } from "styled-components"

const StyledArticleSection = styled.section`
  width: 100%;
  background-color: #fafafa;
`

export default function ArticleSection({ children }) {
  return <StyledArticleSection>{children}</StyledArticleSection>
}
