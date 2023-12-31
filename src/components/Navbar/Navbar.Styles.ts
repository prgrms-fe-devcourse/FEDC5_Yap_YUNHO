import styled from "styled-components"

export const NavbarLayout = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 12rem;
  padding: 2rem;
  border-bottom: 0.1rem solid #000;
`

export const NavbarLeftList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavbarButton = styled.button`
  svg {
    font-size: 3rem;
  }
`
export const NavbarLogo = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`

export const NavbarRightList = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const NavbarProfile = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`
