import { useNavigate } from "react-router-dom"
import { NavbarButton } from "../../Navbar.Styles"
import logo from "../../../../assets/logo.png"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"

const NavbarLeftList = () => {
  const navigate = useNavigate()

  return (
    <S.NavbarLeftListLayout>
      <NavbarButton onClick={() => navigate("/")}>
        <S.NavbarLogo
          src={logo}
          alt="로고"
        />
      </NavbarButton>
      {/* 나중에 SearchModal과 연결 */}
      <NavbarButton>
        <SearchIcon />
      </NavbarButton>
    </S.NavbarLeftListLayout>
  )
}

export default NavbarLeftList
