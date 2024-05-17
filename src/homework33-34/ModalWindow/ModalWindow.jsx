import { styled } from "styled-components"
import { createPortal } from "react-dom"
import { useRef, useEffect } from "react"

const StyledModalWindow = styled.dialog`
  text-align: center;
  top: 10%;
  min-width: 60%;
  min-height: 60%;
  background-color: rgb(201 201 201);
  border: 2px solid #212529;
  border-radius: 0.5rem;

  animation: openModal 0.3s ease-in-out;
  @keyframes openModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & h2 {
    font-size: 3.5rem;
  }
  & h3 {
    font-size: 14.5rem;
  }
  & p {
    font-size: 1.5rem;
  }
`

export default function ModalWindow({ children, open }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <StyledModalWindow ref={dialog}>{children}</StyledModalWindow>,
    document.body
  )
}
