import styled from "styled-components"

export const SignupFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 50rem;
  color: ${({ theme }) => theme.colors.white};
`
export const SignupFormTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  width: 100%;
  padding-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSizes.large};
`
export const SignupFormContainer = styled.form`
  width: 50rem;
  height: 38rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4rem;
`
export const Button = styled.button<{ $width: number; $color: string }>`
  width: ${({ $width }) => `${$width}%`};
  height: 100%;
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
