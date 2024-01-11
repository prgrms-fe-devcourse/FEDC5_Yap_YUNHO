import styled from "styled-components"

export const SignupInputItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  height: 10rem;
  width: 100%;

  &:last-of-type {
    position: relative;
    z-index: 0;
    top: -1.5rem;
  }
`

export const SignupInputItemTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  width: 53%;
`

export const ErrorMessage = styled.div`
  height: 1.4rem;
  color: ${({ theme }) => theme.colors.point};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`
