import styled from "styled-components"

export const NavbarToggleMenuLayout = styled.div<{ $isToggle: boolean }>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.size16};
  top: 10rem;
  width: 13rem;
  background-color: ${({ theme }) => theme.colors.point};
  transform-origin: top;
  transform: ${({ $isToggle }) => ($isToggle ? `scaleY(1)` : `scaleY(0)`)};
  transition: transform ${({ theme }) => theme.transition.normal};
  @media screen and (max-width: 1024px) {
    display: block;
  }
`
