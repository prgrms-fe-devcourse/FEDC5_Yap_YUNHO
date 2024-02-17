import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"

const LOGIN_PAGE_PATH_NAME = "/login"
const SIGNUP_PAGE_PATH_NAME = "/signup"
const USER_EDIT_PAGE_PATH_NAME = "/useredit"

const Navbar = () => {
  const { pathname } = useLocation()

  if (
    pathname === SIGNUP_PAGE_PATH_NAME ||
    pathname === USER_EDIT_PAGE_PATH_NAME
  ) {
    return
  }

  const isLoginPage = pathname === LOGIN_PAGE_PATH_NAME

  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      {!isLoginPage && <NavbarRightList />}
    </S.NavbarLayout>
  )
}

export default Navbar
