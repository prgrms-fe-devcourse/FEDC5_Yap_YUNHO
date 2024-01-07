import styled, { css } from "styled-components"
const layoutBorder = css`
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.point};
`

export const SignupFormLayout = styled.div`
  ${layoutBorder}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 50rem;
  color: ${({ theme }) => theme.colors.white};
`
export const SignupFormTitle = styled.h2`
  ${layoutBorder}
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SignupFormContainer = styled.div`
  width: 100%;
  ${layoutBorder}
  height: 100%;
`
export const SingupInputContainer = styled.div`
  ${layoutBorder}
  height: 10rem;
`
export const ButtonContainer = styled.div`
  ${layoutBorder}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 10rem;
`
export const Button = styled.button<{ $width: number; $color: string }>`
  width: ${({ $width }) => `${$width}rem`};
  height: 50%;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $color }) => $color};

  border-radius: ${({ theme }) => theme.radius.size8};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`
