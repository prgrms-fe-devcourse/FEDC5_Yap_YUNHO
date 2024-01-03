import {
  NavbarButton,
  NavbarToggleButton,
} from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import { useEffect } from "react"
import profile from "@/assets/profile.png"
import NavbarLoggedInMenu from "./NavbarLoggedInMenu/NavbarLoggedInMenu"
import NavbarNotLoggedInMenu from "./NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import MenuIcon from "@mui/icons-material/Menu"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { LogoutAPI, POST_API } from "@/apis/Api"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import NavbarToggleMenu from "./NavbarToggleMenu/NavbarToggleMenu"
import useNavbarToggle from "@/hooks/useNavbarToggle"

export type HandleMenuClickProps = (menu: string) => void

const NavbarRightList = () => {
  const { isLoggedIn, user, setLogin, setLogout } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useNavbarToggle()

  const navigate = useNavigate()

  const handleMenuClick: HandleMenuClickProps = (menu) => {
    switch (menu) {
      case "로그인":
        handleLogin()
        // 원래는 로그인 페이지 이동
        break
      case "로그아웃":
        handleLogout()
        break
      case "DM":
        navigate("/directmessage")
        break
      case "게시물 생성":
        console.log("게시물 생성 모달창")
        break
      case "알림":
        console.log("알림 드롭다운 or 모달창")
        break
      default:
        break
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
        navigate("/")
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

      <NavbarToggleButton
        onClick={handleToggle}
        ref={toggleRef}
      >
        <MenuIcon />
        {isToggle && (
          <NavbarToggleMenu
            isToggle={isToggle}
            handleMenuClick={handleMenuClick}
          />
        )}
      </NavbarToggleButton>

      <NavbarButton>
        <S.NavbarProfile
          src={profile}
          alt="프로필"
          onClick={() => {
            navigate("/profile")
          }}
        />
      </NavbarButton>
    </S.NavbarRightListLayout>
  )
}

export default NavbarRightList
