import Button from "../../../Button/Button"
import { NavbarButton } from "../../Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "../../../../assets/profile.png"
import { NAV_MENU_LIST } from "@/constants/stores"
import { POST_API } from "@/apis/Api"

const NavbarRightList = () => {
  const handleMenuClick = (menuTitle: string): void => {
    // 로그인 일때
    if (menuTitle === "로그인") {
      handleLogin()
    }
  }

  const handleLogin = async () => {
    const submission = {
      email: "gnsdh8616@naver.com",
      password: "220874",
    }
    try {
      const res = await POST_API("/login", submission)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <S.NavbarRightListLayout>
      {NAV_MENU_LIST.map((menu) => (
        <Button
          height="4.5rem"
          fontSize="2rem"
          key={menu.title}
          onClick={() => {
            handleMenuClick(menu.title)
          }}
        >
          {menu.title}
        </Button>
      ))}

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
