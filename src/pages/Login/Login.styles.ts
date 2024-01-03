import styled from "styled-components"

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
`

export const ServiceLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12rem;

  border-bottom: 0.1rem solid black;
  background-color: ${({ theme }) => theme.colors.sub};
`

export const ServiceLogo = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.circle};
  margin: 0 2rem;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: calc(100% - 12rem);
  min-height: 40rem;
  min-width: 30rem;
`
