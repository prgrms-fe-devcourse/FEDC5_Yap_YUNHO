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

const LoginComponent = () => {
  const userInfoRef = useRef({ email: "", password: "" })
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" })

  const updateUserInfo = (value: string, type: string) => {
    if (type === "text") {
      userInfoRef.current.email = value
    } else if (type === "password") {
      userInfoRef.current.password = value
    }
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

    setErrorMessage(_ErrorMessage)

    console.log("로그인 시도!")
    /** 추후 API 연결 */
    // 로그인 성공시 -> 홈화면으로 이동
    // 로그인 실패시 -> 없는 아이디면 잘못된 아이디 혹은 잘못된 비밀번호 입니다.
  }

  return (
    <S.LoginComponentLayout>
      <S.LoginComponentTitle>로그인</S.LoginComponentTitle>
      <S.LoginForm onSubmit={loginAction}>
        <LoginInputContainer
          updateUserInfo={updateUserInfo}
          errorMessage={errorMessage.email}
          type="text"
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
            onClick={() => console.log("회원가입 창으로 이동")}
          >
            회원가입
          </S.Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginComponentLayout>
  )
}

export default LoginComponent
