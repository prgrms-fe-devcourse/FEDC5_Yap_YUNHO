import { useNavigate } from "react-router-dom"
import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"

const NavbarLeftList = () => {
  const navigate = useNavigate()

  return (
    <S.NavbarLeftListLayout>
      <S.NavbarLogoContainer onClick={() => navigate("/")}>
        <S.NavbarLogo />
      </S.NavbarLogoContainer>
      <NavbarButton
        onClick={() => {
          console.log("서치 모달")
        }}
      >
        <SearchIcon />
      </NavbarButton>
    </S.NavbarLeftListLayout>
  )
}

export default NavbarLeftList
