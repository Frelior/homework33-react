import { styled } from "styled-components"

export const StyledForm = styled.div`
  max-width: 23%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-grow: 1;
  .card {
    border: none;
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & .form-control.is-invalid {
      // padding: inerhit;
    }
  }
`
