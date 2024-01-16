import styled from "styled-components"

export const NavbarRightListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  user-select: none;
  z-index: ${({ theme }) => theme.zIndex.navbarRightList};
`

export const NavbarProfile = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
`

export const NavbarMenuList = styled.ul<{ $isToggle?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    top: 18rem;
    left: 12rem;
    transition: ${({ $isToggle }) =>
      $isToggle ? `opacity 0.3s ease, visibility 0.1s ease` : `none`};
    opacity: ${({ $isToggle }) => ($isToggle ? "1" : "0")};
    visibility: ${({ $isToggle }) => ($isToggle ? "visible" : "hidden")};
  }
`
