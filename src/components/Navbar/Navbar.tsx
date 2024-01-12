import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"

const checkPathName = (path: string) => {
  if (path.includes("useredit") || path.includes("signup")) {
    return false
  }

  if (path.includes("login")) {
    return "login"
  }

  return true
}

const Navbar = () => {
  const { pathname } = useLocation()
  const NavbarFlag = checkPathName(pathname)
  if (!NavbarFlag) {
    return
  }

  const isLoginPage = NavbarFlag === "login"

  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      {!isLoginPage && <NavbarRightList />}
    </S.NavbarLayout>
  )
}

export default Navbar
