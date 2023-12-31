import * as S from "./Navbar.Styles"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.png"
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom"
import SearchIcon from "@mui/icons-material/Search"

const navMenu = ["게시물 생성", "DM", "알림", "로그인"]

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <S.NavbarLayout>
      <S.NavbarLeftList>
        <S.NavbarButton onClick={() => navigate("/")}>
          <S.NavbarLogo
            src={logo}
            alt="로고"
          />
        </S.NavbarButton>
        {/* 나중에 SearchModal과 연결 */}
        <S.NavbarButton>
          <SearchIcon />
        </S.NavbarButton>
      </S.NavbarLeftList>
      <S.NavbarRightList>
        {navMenu.map((menu) => {
          return (
            <Button
              height="4.5rem"
              fontSize="2rem"
            >
              {menu}
            </Button>
          )
        })}

        <S.NavbarProfile src={profile} />
      </S.NavbarRightList>
    </S.NavbarLayout>
  )
}

export default Navbar
