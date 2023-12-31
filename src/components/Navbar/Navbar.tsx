import * as S from "./Navbar.Styles"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"

const Navbar = () => {
  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      <NavbarRightList />
    </S.NavbarLayout>
  )
}

export default Navbar
