import styled from "styled-components"

export const SignupFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 50rem;
  color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
`
export const SignupFormTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.large};
`
export const SignupFormContainer = styled.form`
  width: 50rem;
  height: 40rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 4rem;

  position: relative;
  top: -1.5rem;
`
export const Button = styled.button<{
  $width: number
  $color: string
  disabled?: boolean
}>`
  width: ${({ $width }) => `${$width}%`};
  height: 100%;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => theme.radius.size8};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition: all 0.3s ease-in-out;
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
