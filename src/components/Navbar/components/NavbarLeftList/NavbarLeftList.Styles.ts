import styled from "styled-components"
import logo from "@/assets/logo.png"

export const NavbarLeftListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavbarLogoContainer = styled.button`
  display: flex;
  align-items: center;
  height: 10rem;
  position: relative;
  border-radius: ${({ theme }) => theme.radius.circle};
  &:hover {
    transition: all 0.1s linear;
    transform: scale(1.2);
  }
  // 원
  &::before {
    content: "";
    top: 2rem;
    left: 1.35rem;
    position: absolute;
    width: 6rem;
    height: 6rem;
    background-color: ${({ theme }) => theme.colors.point};
    border-radius: ${({ theme }) => theme.radius.circle};
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
  }
`
export const NavbarLogo = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-image: url(${logo});
  background-size: cover;
  z-index: ${({ theme }) => theme.zIndex.navbarLogo};
`
