import styled from "styled-components"

export const LoginComponentLayout = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width: 900px) {
    min-height: 33rem;
    height: 50%;
  }
  @media screen and (max-width: 900px) {
    min-height: 33rem;
    height: 50%;
  }
`

export const LoginComponentTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  min-width: 2rem;
  min-width: 2rem;
`
export const LoginForm = styled.form`
  width: 50rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 10rem;
  gap: 2rem;
  height: 10rem;
  gap: 2rem;
`

export const Button = styled.button<{ $color: string }>`
  width: 53%;
  height: 50%;
  padding: 1rem 0;
  width: 53%;
  height: 50%;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $color }) => $color};

  border-radius: ${({ theme }) => theme.radius.size4};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`
