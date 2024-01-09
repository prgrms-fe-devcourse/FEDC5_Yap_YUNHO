import { useNavigate } from "react-router-dom"
import { NavbarButton } from "@/components/Navbar/Navbar.Styles"
import * as S from "./NavbarLeftList.Styles"
import SearchIcon from "@mui/icons-material/Search"
import Modal from "@/components/Modal/Modal"
import useModal from "@/components/Modal/hooks/useModal"
import Search from "@/components/Search/Search"

const NavbarLeftList = () => {
  const navigate = useNavigate()
  const { showModal, closeModal, isModalToggle } = useModal()

  return (
    <S.NavbarLeftListLayout>
      <S.NavbarLogoContainer onClick={() => navigate("/")}>
        <S.NavbarLogo />
      </S.NavbarLogoContainer>
      <NavbarButton
        onClick={() => {
          showModal()
        }}
      >
        <SearchIcon />
      </NavbarButton>
      <Modal
        isShow={isModalToggle}
        onClose={closeModal}
      >
        <Search />
      </Modal>
    </S.NavbarLeftListLayout>
  )
}

export default NavbarLeftList
