import { FormEvent, useState } from "react"
import * as S from "./LoginComponent.Styles"
import { theme } from "@/styles/theme"

import LoginInputContainer from "./LoginInput/LoginInputContainer"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useLogin from "../hooks/useLogin"

const LoginComponent = () => {
  const { userInfoRef, updateUserInfo } = useLogin()
  const [alertMessage, setAlertMessage] = useState("")

  const { setLogin } = useAuthUserStore()
  const navigate = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = userInfoRef.current

    if (email === "" || password === "") {
      return
    }

    API.post("/login", {
      email,
      password,
    })
      .then((res) => {
        const { user, token } = res.data
        setLogin(user, token)
        navigate("/", { replace: true })
      })
      .catch(() => {
        setAlertMessage("잘못된 이메일이거나 잘못된 비밀번호의 조합입니다.")
        showModal()
      })
  }

  return (
    <>
      <AlertModal
        isShow={isShowModal}
        alertMessage={alertMessage}
        onClose={closeModal}
      />
      <S.LoginComponentLayout>
        <S.LoginComponentTitle>로그인</S.LoginComponentTitle>
        <S.LoginForm onSubmit={handleLogin}>
          <LoginInputContainer
            updateUserInfo={updateUserInfo}
            type="email"
            placeholder="이메일"
          />
          <LoginInputContainer
            updateUserInfo={updateUserInfo}
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
    </>
  )
}

export default LoginComponent
