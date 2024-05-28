import styled from "styled-components"

export const StyledList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  width: 50%;
  height: 74vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 2px solid #bbbbbb;
  border-radius: 0.5rem;
  padding: 0.5rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bbbbbb;
    border-radius: 0.5rem;
`
