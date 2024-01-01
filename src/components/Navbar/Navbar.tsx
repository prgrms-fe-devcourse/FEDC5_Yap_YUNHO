import * as S from "./Navbar.Styles"
import logo from "../../assets/logo.png"
import profile from "../../assets/logo.png"

const Navbar = () => {
  return (
    <S.NavbarLayout>
      <S.NavbarLeftList>
        <S.NavbarLogo
          src={logo}
          alt="로고"
        />
        <S.NavbarSearchButton>검색</S.NavbarSearchButton>
      </S.NavbarLeftList>
      <S.NavbarRightList>
        <S.NavbarButton>게시물 생성</S.NavbarButton>
        <S.NavbarButton>DM</S.NavbarButton>
        <S.NavbarButton>알림</S.NavbarButton>
        <S.NavbarButton>로그인</S.NavbarButton>
        <S.NavbarProfile
          src={profile}
          alt="프로필"
        />
      </S.NavbarRightList>
    </S.NavbarLayout>
  )
}

export default Navbar
