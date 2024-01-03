import styled from "styled-components"

export const NavbarRightListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NavbarProfile = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.circle};
`

export const NavbarMenuList = styled.ul<{ $isToggle?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    display: ${({ $isToggle }) => ($isToggle ? "flex" : "none")};
    flex-direction: column;
    top: 18rem;
    left: 12rem;
  }
`
