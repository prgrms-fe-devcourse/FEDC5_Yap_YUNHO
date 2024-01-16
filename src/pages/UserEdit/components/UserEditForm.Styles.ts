import styled from "styled-components"

export const UserEditFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70rem;
  height: 55rem;

  color: ${({ theme }) => theme.colors.white};
  gap: 2rem;
`

export const UserEditFormTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const UserEditFormContainer = styled.form`
  width: 70rem;
  height: 40rem;
`
export const UserEditFormItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
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
  transition: ${({ theme }) => theme.transition.normal};

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: ${({ theme }) => theme.opacity.high};
  }
  &:not(:disabled) {
    background-color: ${({ $color }) => $color};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.black};
  }
`
