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
`
