import {
  NavbarButton,
  NavbarToggleButton,
} from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarRightList.Styles"
import profile from "@/assets/profile.png"
import NavbarLoggedInMenu from "./NavbarLoggedInMenu/NavbarLoggedInMenu"
import NavbarNotLoggedInMenu from "./NavbarNotLoggedInMenu/NavbarNotLoggedInMenu"
import MenuIcon from "@mui/icons-material/Menu"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import NavbarToggleMenu from "./NavbarToggleMenu/NavbarToggleMenu"
import useToggle from "@/hooks/useToggle"
import useMenuClick from "../../hooks/useNavMenuClick"
import CloseIcon from "@mui/icons-material/Close"

const NavbarRightList = () => {
  const { isLoggedIn, myId } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useToggle()
  const { handleMenuClick, PostEditModal } = useMenuClick()

  const navigate = useNavigate()

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
        {isToggle ? <CloseIcon /> : <MenuIcon />}

        <NavbarToggleMenu
          $isToggle={isToggle}
          handleMenuClick={handleMenuClick}
        />
      </NavbarToggleButton>

      {/* 프로필 버튼*/}
      <NavbarButton
        onClick={() => {
          navigate(`/profile/${myId}`)
        }}
      >
        <S.NavbarProfile
          src={profile}
          alt="프로필"
        />
      </NavbarButton>
      {PostEditModal}
    </S.NavbarRightListLayout>
  )
}

export default NavbarRightList
