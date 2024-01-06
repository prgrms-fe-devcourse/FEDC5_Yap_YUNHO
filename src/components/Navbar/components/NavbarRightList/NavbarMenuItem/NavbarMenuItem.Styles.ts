import styled from "styled-components"

export const NavbarMenuDivider = styled.div`
  height: 0.4rem;
  width: 80%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.point};
  transform: scaleX(0);
  padding-top: 0.5rem;
  transition: transform ease-in-out 0.3s;
`

export const NavbarMenuContainer = styled.div`
  &:hover {
    ${NavbarMenuDivider} {
      transform: scaleX(1);
    }
  }
`
