import styled from "styled-components"

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;

  height: 100%;
  @media screen and (max-width: 50rem) {
    flex-direction: column;
    height: 50rem;
  }
`
