import styled from "styled-components"

export const NavbarToggleMenuLayout = styled.div<{ $isToggle: boolean }>`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.size16};
  top: 10rem;
  width: 13rem;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.point};
  transform-origin: top;
  transform: ${({ $isToggle }) => ($isToggle ? `scaleY(1)` : `scaleY(0)`)};
  transition: transform ${({ theme }) => theme.transition.normal};
  @media screen and (max-width: 1024px) {
    display: block;
  }
`
