import { styled } from "styled-components"

const StyledArticleSection = styled.section`
  width: 100%;
  background-color: #fafafa;
  position: relative;
`

export default function ArticleSection({ children }) {
  return <StyledArticleSection>{children}</StyledArticleSection>
}
