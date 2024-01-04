import styled from "styled-components"

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`

export const ServiceLogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12rem;

  border-bottom: 0.1rem solid black;
  background-color: ${({ theme }) => theme.colors.sub};
  position: relative;

  &::before {
    content: "";
    top: 25.0312px;
    left: 15.578px;
    position: absolute;
    width: 7.1rem;
    height: 7.1rem;
    background-color: ${({ theme }) => theme.colors.point};
    border-radius: ${({ theme }) => theme.radius.circle};
  }
`

export const ServiceLogo = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${({ theme }) => theme.radius.circle};

  background-image: url("/src/assets/logo.png");
  background-size: cover;
  position: absolute;
  z-index: 1;

  cursor: pointer;
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
