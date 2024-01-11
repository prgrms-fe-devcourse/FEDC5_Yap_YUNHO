import { useNavigate } from "react-router-dom"
import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"
import Modal from "@/components/Modal/Modal"
import Search from "@/components/Search/Search"
import useSearchModalStore from "@/components/Search/stores/useSearchModalStore"

const NavbarLeftList = () => {
  const navigate = useNavigate()
  const { isShowSearchModal, showSearchModal, closeSearchModal } =
    useSearchModalStore()

  return (
    <S.NavbarLeftListLayout>
      <S.NavbarLogoContainer onClick={() => navigate("/")}>
        <S.NavbarLogo />
      </S.NavbarLogoContainer>
      <NavbarButton
        onClick={() => {
          showSearchModal()
        }}
      >
        <SearchIcon />
      </NavbarButton>
      <Modal
        isShow={isShowSearchModal}
        onClose={closeSearchModal}
        clickAwayEnable={true}
      >
        <Search />
      </Modal>
    </S.NavbarLeftListLayout>
  )
}

export default NavbarLeftList
