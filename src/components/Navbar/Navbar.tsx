import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"

const Navbar = () => {
  if (!handlePathName(useLocation().pathname)) {
    return
  }

  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      <NavbarRightList />
    </S.NavbarLayout>
  )
}

const handlePathName = (path: string) => {
  // 404페이지에서도 Navbar를 보여준다 가정
  switch (path) {
    case "useredit":
      return false
    default:
      return true
  }
}

export default Navbar
