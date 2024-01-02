import styled from "styled-components"

export const NavbarLayout = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 12rem;
  padding: 2rem;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.black}`};
  background-color: ${({ theme }) => theme.colors.sub_alt};
`

export const NavbarButton = styled.button`
  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.point};
  }
`

export const NavbarToggleButton = styled.button`
  @media screen and (min-width: 1024px) {
    display: none;
  }
  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.point};
  }
`
