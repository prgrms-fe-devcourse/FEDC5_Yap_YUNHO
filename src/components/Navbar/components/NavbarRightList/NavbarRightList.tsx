import Button from "../../../Button/Button"
import { NavbarButton } from "../../Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "../../../../assets/profile.png"
import { NAV_MENU_LIST } from "@/constants/Stores"

const NavbarRightList = () => {
  return (
    <S.NavbarRightListLayout>
      {NAV_MENU_LIST.map((menu) => (
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
    </S.NavbarRightListLayout>
  )
}

export default NavbarRightList
