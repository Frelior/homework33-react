import { StyledList } from "./List.js"

export default function List({ children, ...props }) {
  return <StyledList {...props}>{children}</StyledList>
}
