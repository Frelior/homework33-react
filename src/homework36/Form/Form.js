import styled from "styled-components"

export const StyledForm = styled.div`
  flex-basis: 40%;
  background-color: #fafa;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & .form-text-section{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & .form-control.is-invalid {
        border-color: red;
  }
`
