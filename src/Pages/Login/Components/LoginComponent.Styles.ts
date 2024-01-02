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
`
export const LoginForm = styled.form`
  min-width: 50%;
  max-width: 50%;
`

export const LoginInputContainer = styled.div`
  height: 25%;
  position: relative;
`

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: 0;

  color: red;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`

interface ButtonProps {
  action: string
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, action }) =>
    action === "login" ? theme.colors.point : theme.colors.sub_alt};

  border: 0.1rem solid gray;
  border-radius: ${({ theme }) => theme.radius.size4};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  margin-bottom: 0.5rem;

  cursor: pointer;
`
