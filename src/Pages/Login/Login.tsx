import * as S from "./Login.styles"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <S.MainContainer>
      <Link to="/">
        <S.HeaderComponent>Service Logo</S.HeaderComponent>
      </Link>
      <S.SubContainer>
        <S.ServiceInfoComponent>Service Info Component</S.ServiceInfoComponent>
        <S.LoginComponent>Login Component</S.LoginComponent>
      </S.SubContainer>
    </S.MainContainer>
  )
}
