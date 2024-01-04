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
import { POST_API, authUser } from "@/apis/Api"

import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import NavbarToggleMenu from "./NavbarToggleMenu/NavbarToggleMenu"
import useToggle from "@/hooks/useToggle"
import { HandleMenuClickProps } from "../../types"

const NavbarRightList = () => {
  const { isLoggedIn, setLogin, setLogout } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useToggle()

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

  const fetchUser = async () => {
    const { user, token } = await authUser()
    if (!user || !token) {
      return
    }
    setLogin(user, token)
  }

  // 새로고침 시 로그인 유지
  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <S.NavbarRightListLayout>
      {/* 메뉴들 */}

      {isLoggedIn ? (
        <NavbarLoggedInMenu handleMenuClick={handleMenuClick} />
      ) : (
        <NavbarNotLoggedInMenu handleMenuClick={handleMenuClick} />
      )}

      {/* 햄버거 토글 버튼*/}
      <NavbarToggleButton
        onClick={handleToggle}
        ref={toggleRef}
      >
        <MenuIcon />
        {isToggle && (
          <NavbarToggleMenu
            $isToggle={isToggle}
            handleMenuClick={handleMenuClick}
          />
        )}
      </NavbarToggleButton>

      {/* 프로필 버튼*/}
      <NavbarButton
        onClick={() => {
          navigate("/profile")
        }}
      >
        <S.NavbarProfile
          src={profile}
          alt="프로필"
        />
      </NavbarButton>
    </S.NavbarRightListLayout>
  )
}

export default NavbarRightList
