import styled from "styled-components"

export const StyledToDoListItem = styled.li`
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  & p {
    text-align: left;
    margin: 0;
  }
  & .delete-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`
