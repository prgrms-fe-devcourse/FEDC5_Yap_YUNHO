import styled from "styled-components"

export const NavbarLeftListLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavbarLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.point};
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
`
