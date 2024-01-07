import styled from "styled-components"

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`

export const LoginComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;

  min-height: 50rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
