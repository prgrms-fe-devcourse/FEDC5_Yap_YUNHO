import styled from "styled-components"

export const LoginComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 50%;
  height: 100%;

  color: ${({ theme }) => theme.colors.white};
`

export const LoginComponentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 1rem;
`
export const LoginForm = styled.form`
  min-width: 35%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Button = styled.button<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $color }) => $color};

  border-radius: ${({ theme }) => theme.radius.size4};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1.5rem;

  cursor: pointer;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`