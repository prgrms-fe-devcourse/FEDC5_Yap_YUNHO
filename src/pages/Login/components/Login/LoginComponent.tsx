import { useRef, useState, FormEvent } from "react"
import * as S from "./LoginComponent.Styles"
import { theme } from "@/styles/theme"
import {
  validateEmailInput,
  validatePasswordInput,
} from "../../utils/validation/index"
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from "../../constants/errorMessage"
import LoginInputContainer from "./Input/LoginInputContainer"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"

interface UserInfoRefIndex {
  [index: string]: string
}

const LoginComponent = () => {
  const userInfoRef = useRef<UserInfoRefIndex>({ email: "", password: "" })
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" })
  const { setLogin } = useAuthUserStore()
  const navigate = useNavigate()

  const updateUserInfo = (value: string, type: string) => {
    userInfoRef.current[type] = value
  }

  const loginAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = userInfoRef.current
    const _ErrorMessage = {
      email: "",
      password: "",
    }

    if (!validateEmailInput(email)) {
      _ErrorMessage.email = EMAIL_ERROR_MESSAGE
    }

    if (!validatePasswordInput(password)) {
      _ErrorMessage.password = PASSWORD_ERROR_MESSAGE
    }

    if (_ErrorMessage.email || _ErrorMessage.password) {
      setErrorMessage(_ErrorMessage)
      return
    }

    API.post("/login", {
      email,
      password,
    })
      .then((res) => {
        const { user, token } = res.data
        setLogin(user, token)
        navigate("/")
      })
      .catch(() => {
        setErrorMessage({
          email: "잘못된 이메일이거나",
          password: "잘못된 비밀번호의 조합입니다.",
        })
      })
  }

  return (
    <S.LoginComponentLayout>
      <S.LoginComponentTitle>로그인</S.LoginComponentTitle>
      <S.LoginForm onSubmit={loginAction}>
        <LoginInputContainer
          updateUserInfo={updateUserInfo}
          errorMessage={errorMessage.email}
          type="email"
          placeholder="이메일"
        />
        <LoginInputContainer
          updateUserInfo={updateUserInfo}
          errorMessage={errorMessage.password}
          type="password"
          placeholder="비밀번호"
        />
        <S.ButtonContainer>
          <S.Button
            type="submit"
            $color={theme.colors.point}
          >
            로그인
          </S.Button>
          <S.Button
            type="button"
            $color={theme.colors.sub_alt}
            onClick={() => navigate("/signup")}
          >
            회원가입
          </S.Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginComponentLayout>
  )
}

export default LoginComponent
