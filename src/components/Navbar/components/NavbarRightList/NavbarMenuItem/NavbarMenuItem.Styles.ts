import styled from "styled-components"

export const NavbarMenuDivider = styled.div`
  height: 0.4rem;
  width: 80%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.point};
  transform: scaleX(0);
  padding-top: 0.5rem;
  transition: transform ${({ theme }) => theme.transition.normal};
`

export const NavbarMenuContainer = styled.div`
  &:hover {
    ${NavbarMenuDivider} {
      transform: scaleX(1);
    }
  }
  svg {
    @media screen and (max-width: 1024px) {
      color: ${({ theme }) => theme.colors.sub_alt};
      font-size: 1.8rem;
    }
    color: ${({ theme }) => theme.colors.point};
    padding-left: 0.5rem;
    pointer-events: none;
  }
`
