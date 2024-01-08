import styled from "styled-components"

export const SignupInputItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  height: 10rem;
  width: 100%;

  &:last-of-type {
    position: relative;
    z-index: 0;
    top: -2rem;
    height: auto;
  }
`

export const SignupInputItemTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  width: 53%;
`
