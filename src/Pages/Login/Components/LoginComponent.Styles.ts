import styled from "styled-components"

export const LoginComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  min-width: 50%;
  height: 50%;
  position: relative;
  top: 20%;
  color: white;
`
export const LoginComponentTitle = styled.h1`
  font-size: 2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  min-width: 20rem;
  min-height: 3rem;

  border: 0.1rem solid gray;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`
