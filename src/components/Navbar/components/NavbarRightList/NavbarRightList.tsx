import Button from "../../../Button/Button"
import { NavbarButton } from "../../Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "../../../../assets/profile.png"
const navMenu = ["게시물 생성", "DM", "알림", "로그인"]

const NavbarRightList = () => {
  return (
    <S.NavbarRightListlayout>
      {navMenu.map((menu) => (
        <Button
          height="4.5rem"
          fontSize="2rem"
        >
          {menu}
        </Button>
      ))}

      <NavbarButton>
        <S.NavbarProfile
          src={profile}
          alt="프로필"
        />
      </NavbarButton>
    </S.NavbarRightListlayout>
  )
}

export default NavbarRightList
