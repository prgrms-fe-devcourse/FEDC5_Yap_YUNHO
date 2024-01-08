import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"

const checkPathName = (path: string) => {
  if (path.includes("useredit") || path.includes("signup")) {
    return false
  } else if (path.includes("login")) {
    return "login"
  }
  return true
}

const Navbar = () => {
  const NavbarFlag = checkPathName(useLocation().pathname)
  if (!NavbarFlag) {
    return
  }

  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      {NavbarFlag !== "login" && <NavbarRightList />}
    </S.NavbarLayout>
  )
}

export default Navbar
