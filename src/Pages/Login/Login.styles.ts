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
  margin-left: 2rem;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: calc(100% - 12rem);
`

export const ServiceLogoTitle = styled.h1`
  padding: 1rem;
  font-size: 3rem;
`

export const ServiceInfoContainer = styled.div`
  display: flex;
  min-width: 50%;
  width: 50%;

  border-right: 0.1rem solid black;
  justify-content: center;
  align-items: center;
`
