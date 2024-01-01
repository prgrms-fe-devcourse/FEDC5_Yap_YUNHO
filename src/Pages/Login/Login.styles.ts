import { theme } from "@/styles/Theme"
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
  font-size: 3rem;
  background-color: ${({ theme }) => theme.colors.sub};
`

export const ServiceLogo = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: 50%;
`

export const LoginInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 12rem);
`
export const ServiceInfoComponent = styled.div`
  display: flex;
  width: 50%;

  border-right: 0.1rem solid black;
  justify-content: center;
  align-items: center;
`
export const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  text-align: center;
`
