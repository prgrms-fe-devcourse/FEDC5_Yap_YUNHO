import styled from "styled-components"

export const NavbarRightListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  user-select: none;
  z-index: 2; // merge할때 theme으로 교체
`

export const NavbarProfile = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.circle};
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
