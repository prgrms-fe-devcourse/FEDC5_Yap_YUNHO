import { useState } from "react"
import Button from "../../../Button/Button"
import { NavbarButton } from "../../Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "../../../../assets/profile.png"
import { NAV_MENU_LIST } from "@/constants/stores"

const NavbarRightList = () => {
  const handleMenuClick = (menuId: number): void => {
    console.log(menuId)
  }
  return (
    <S.NavbarRightListLayout>
      {NAV_MENU_LIST.map((menu) => (
        <Button
          height="4.5rem"
          fontSize="2rem"
          key={menu.id}
          onClick={() => {
            handleMenuClick(menu.id)
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
