import styled from "styled-components"

export const NavbarNotLoggedInMenuList = styled.ul<{ isToggle: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    display: ${({ isToggle }) => (isToggle ? "flex" : "none")};
    flex-direction: column;
    top: 18rem;
    left: 12rem;
  }
`
