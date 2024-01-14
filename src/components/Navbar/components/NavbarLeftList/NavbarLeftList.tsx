import { useNavigate } from "react-router-dom"
import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"
import useSearchModalStore from "@/components/SearchModal/stores/useSearchModalStore"
import SearchModal from "@/components/SearchModal/SearchModal"

const NavbarLeftList = () => {
  const navigate = useNavigate()
  const { showSearchModal } = useSearchModalStore()

  return (
    <>
      <S.NavbarLeftListLayout>
        <S.NavbarLogoContainer onClick={() => navigate("/")}>
          <S.NavbarLogo />
        </S.NavbarLogoContainer>
        <NavbarButton onClick={showSearchModal}>
          <SearchIcon />
        </NavbarButton>
      </S.NavbarLeftListLayout>
      <SearchModal />
    </>
  )
}

export default NavbarLeftList
