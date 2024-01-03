import styled from "styled-components"

export const NavbarToggleMenuLayout = styled.div`
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.size16};
  top: 10rem;
  height: 28rem;
  width: 13rem;
  background-color: ${({ theme }) => theme.colors.point};
`
