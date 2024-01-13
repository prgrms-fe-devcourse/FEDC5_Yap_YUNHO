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

  height: 2rem;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.large};
`
export const SignupFormContainer = styled.form`
  width: 50rem;
  height: 48rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4rem;
`

export const Button = styled.button<{
  $width: number
  $color: string
}>`
  width: ${({ $width }) => `${$width}%`};
  height: 4rem;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radius.size8};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: all 0.3s ease-in-out;

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  &:not(:disabled) {
    background-color: ${({ $color }) => $color};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.black};
  }
`
