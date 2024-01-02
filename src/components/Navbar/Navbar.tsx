import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"

const Navbar = () => {
  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      <NavbarRightList />
    </S.NavbarLayout>
  )
}

export default Navbar
