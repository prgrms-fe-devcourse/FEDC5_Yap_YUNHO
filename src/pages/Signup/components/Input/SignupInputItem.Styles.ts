import styled from "styled-components"

export const SingupInputItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 33%;
  width: 100%;

  &:last-of-type {
    position: relative;
    z-index: 0;
    top: -4rem;
  }
`
