import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "@/assets/profile.png"
import { useState } from "react"
import NavbarLoggedInMenu from "./NavbarLoggedInMenu/NavbarLoggedInMenu"
import NavbarNotLoggedInMenu from "./NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"

export type HandleMenuClickProps = (menuTitle: string) => void

const NavbarRightList = () => {
  // 나중에 전역 로그인 상태를 받아오도록 변경 예정
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleMenuClick: HandleMenuClickProps = (menuTitle) => {
    if (menuTitle === "로그인") {
      // navigate("/login")
      handleLogin()
    } else if (menuTitle === "로그아웃") {
      // navigate("/")
      // 전역에서 받은 로그인 상태가 true이면 로그아웃하고 홈으로 이동
      handleLogout()
    }
  }

  const handleLogin = (): void => {
    setIsLoggedIn(true)
  }
  const handleLogout = (): void => {
    setIsLoggedIn(false)
  }

  return (
    <S.NavbarRightListLayout>
      {isLoggedIn ? (
        <NavbarLoggedInMenu handleMenuClick={handleMenuClick} />
      ) : (
        <NavbarNotLoggedInMenu handleMenuClick={handleMenuClick} />
      )}
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
