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
  top: 0.5rem;
`

export const Button = styled.button<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $color }) => $color};

  border: 0.1rem solid gray;
  border-radius: ${({ theme }) => theme.radius.size4};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.5rem;

  cursor: pointer;
`
