import { useNavigate } from "react-router-dom"
import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"
import useSearchModalStore from "@/components/SearchModal/stores/useSearchModalStore"

const NavbarLeftList = () => {
  const navigate = useNavigate()
  const { showSearchModal, isShowSearchModal } = useSearchModalStore()
  console.log(isShowSearchModal)

  return (
    <S.NavbarLeftListLayout>
      <S.NavbarLogoContainer onClick={() => navigate("/")}>
        <S.NavbarLogo />
      </S.NavbarLogoContainer>
      <NavbarButton onClick={showSearchModal}>
        <SearchIcon />
      </NavbarButton>
    </S.NavbarLeftListLayout>
  )
}

export default NavbarLeftList
