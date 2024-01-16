import styled, { keyframes } from "styled-components"
import logo from "@/assets/logo.png"

export const NavbarLeftListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const logoAnimation = keyframes`
    0% {
      transform: rotate(25deg);
    }
    30% {
      transform: rotate(-25deg);
    }
    50% {
      transform: rotate(25deg);
    }
    70% {
      transform: rotate(-25deg);
    }
    90% {
      transform: rotate(25deg);
    }
    100% {
      transform: rotate(0deg);
    }
`

export const NavbarLogoContainer = styled.button`
  display: flex;
  align-items: center;
  height: 10rem;
  position: relative;
  border-radius: ${({ theme }) => theme.radius.circle};

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

// 로고 이미지
export const NavbarLogo = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-image: url(${logo});
  background-size: cover;
  z-index: ${({ theme }) => theme.zIndex.navbarLogo};

  &:hover {
    animation-name: ${logoAnimation};
    animation-duration: 0.6s;
  }
`
