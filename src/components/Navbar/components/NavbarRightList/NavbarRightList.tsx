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
import { API } from "@/apis/Api"
import { useNavigate } from "react-router-dom"
import NavbarToggleMenu from "./NavbarToggleMenu/NavbarToggleMenu"
import useToggle from "@/hooks/useToggle"
import { HandleMenuClickProps } from "../../types"

const NavbarRightList = () => {
  const { isLoggedIn, setLogout } = useAuthUserStore()
  const { isToggle, toggleRef, handleToggle } = useToggle()

  const navigate = useNavigate()

  const handleMenuClick: HandleMenuClickProps = (menu) => {
    switch (menu) {
      case "로그인":
        navigate("/login")
        break
      case "로그아웃":
        handleLogout()
        break
      case "DM":
        navigate("/directmessage")
        break
      case "게시물 생성":
        // 게시물 생성 모달
        break
      case "알림":
        // 알림 창(후순위)
        break
      default:
        break
    }
  }

  const handleLogout = async () => {
    await API("/logout")
      .then(() => {
        setLogout()
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
