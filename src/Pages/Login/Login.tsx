import * as S from "./Login.styles"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <S.LoginLayout>
      <Link to="/">
        <S.ServiceLogoContainer>Service Logo</S.ServiceLogoContainer>
      </Link>
      <S.LoginInfoContainer>
        <S.ServiceInfoComponent>Service Info Component</S.ServiceInfoComponent>
        <S.LoginComponent>Login Component</S.LoginComponent>
      </S.LoginInfoContainer>
    </S.LoginLayout>
  )
}
