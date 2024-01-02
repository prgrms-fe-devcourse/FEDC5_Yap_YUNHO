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
    // 로그인 일때
    if (menuTitle === "로그인") {
      handleLogin()
    }
  }

  const handleLogin = (): void => {
    setIsLoggedIn(true)
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
