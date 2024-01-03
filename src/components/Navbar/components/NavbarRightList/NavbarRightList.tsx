import {
  NavbarButton,
  NavbarToggleButton,
} from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "@/assets/profile.png"
import NavbarLoggedInMenu from "./NavbarLoggedInMenu/NavbarLoggedInMenu"
import NavbarNotLoggedInMenu from "./NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import MenuIcon from "@mui/icons-material/Menu"
import { LogoutAPI, POST_API } from "@/apis/Api"
import { AxiosResponse } from "axios"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useEffect } from "react"

export type HandleMenuClickProps = (menu: string) => void

const NavbarRightList = () => {
  const { isLoggedIn, user, setLogin, setLogout } = useAuthUserStore()

  const handleMenuClick: HandleMenuClickProps = (menu) => {
    if (menu === "로그인") {
      handleLogin()
    } else if (menu === "로그아웃") {
      handleLogout()
    }
  }

  const handleLogin = async () => {
    const submission = {
      email: "admin@programmers.co.kr",
      password: "programmers",
    }
    try {
      // Axios 응답 타입을 타입단언이 사용하지 않고 어떻게 정하면 좋을까?
      const res = (await POST_API("login", submission)) as AxiosResponse
      // 로그인 성공
      if (res.status === 200) {
        const { user, token } = res.data
        setLogin(user, token)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogout = async () => {
    try {
      const res = (await LogoutAPI("/logout")) as AxiosResponse
      // 로그아웃 성공
      if (res.status === 200) {
        setLogout()
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {}, [isLoggedIn, user, setLogin, setLogout])

  return (
    <S.NavbarRightListLayout>
      {isLoggedIn ? (
        <NavbarLoggedInMenu handleMenuClick={handleMenuClick} />
      ) : (
        <NavbarNotLoggedInMenu handleMenuClick={handleMenuClick} />
      )}

      <NavbarToggleButton>
        <MenuIcon />
      </NavbarToggleButton>

      <NavbarButton>
        <S.NavbarProfile
          src={profile}
          alt="프로필"
        />
      </NavbarButton>
    </S.NavbarRightListLayout>
  )
}

export default NavbarRightList
