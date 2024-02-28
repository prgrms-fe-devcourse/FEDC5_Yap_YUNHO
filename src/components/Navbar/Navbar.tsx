import { useLocation } from "react-router-dom"
import * as S from "./Navbar.Styles"
import NavbarLeftList from "./components/NavbarLeftList/NavbarLeftList"
import NavbarRightList from "./components/NavbarRightList/NavbarRightList"
import { useMemo } from "react"

const PATH_NAME = {
  LOGIN_PAGE: "/login",
  SIGNUP_PAGE: "/signup",
  USER_EDIT_PAGE: "/useredit",
}

const Navbar = () => {
  const { pathname } = useLocation()

  const isLoginPage = useMemo(
    () => pathname === PATH_NAME.LOGIN_PAGE,
    [pathname],
  )

  if (
    pathname === PATH_NAME.SIGNUP_PAGE ||
    pathname === PATH_NAME.USER_EDIT_PAGE
  ) {
    return
  }

  return (
    <S.NavbarLayout>
      <NavbarLeftList />
      {!isLoginPage && <NavbarRightList />}
    </S.NavbarLayout>
  )
}

export default Navbar
