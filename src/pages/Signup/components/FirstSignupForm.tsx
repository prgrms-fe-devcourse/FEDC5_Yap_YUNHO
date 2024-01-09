import { ChangeEvent, useState, useEffect, FormEvent } from "react"
import * as S from "./FirstSignupForm.Styles"
import { theme } from "@/styles/theme"
import SignupInputContainer from "./SignupInput/SignupInputContainer"
import type { RequiredUserInfo } from "./types"
import { getNewErrorMessage } from "../utils/validateInput"
import { useNavigate } from "react-router-dom"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"

const FirstSignupForm = () => {
  const [requiredUserInfo, setRequiredUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  })

  const [errorMessage, setErrorMessage] = useState({
    email: "이메일을 입력해주세요.",
    nickname: "닉네임을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    passwordCheck: "동일한 비밀번호를 입력해주세요.",
  })

  const navigate = useNavigate()
  const { setLogin } = useAuthUserStore()

  const handleRequiredUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setRequiredUserInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    API.post("/signup", {
      email: requiredUserInfo.email,
      fullName: requiredUserInfo.nickname,
      password: requiredUserInfo.password,
    })
      .then((res) => {
        const { user, token } = res.data
        setLogin(user, token)
      })
      .catch(() => {
        alert("이미 가입된 이메일입니다.")
      })
  }

  const validateUserInfo = (userInfo: RequiredUserInfo) => {
    const newErrorMessage = getNewErrorMessage(userInfo)
    setErrorMessage(newErrorMessage)
  }

  useEffect(() => {
    if (
      requiredUserInfo.email === "" &&
      requiredUserInfo.nickname === "" &&
      requiredUserInfo.password === "" &&
      requiredUserInfo.passwordCheck === ""
    ) {
      return
    }

    validateUserInfo(requiredUserInfo)
  }, [requiredUserInfo])

  return (
    <S.SignupFormLayout>
      <S.SignupFormTitle> 필수 회원정보를 입력해주세요 </S.SignupFormTitle>
      <S.SignupFormContainer onSubmit={handleSignup}>
        <SignupInputContainer
          requiredUserInfo={requiredUserInfo}
          onChange={handleRequiredUserInfo}
          errorMessage={errorMessage}
        />
        <S.ButtonContainer>
          <S.Button
            $width={18}
            $color={theme.colors.sub_alt}
            onClick={() => {
              navigate("/login")
            }}
            type="button"
          >
            취소
          </S.Button>
          <S.Button
            $width={35}
            $color={theme.colors.point}
            disabled={
              errorMessage.email !== "" ||
              errorMessage.nickname !== "" ||
              errorMessage.password !== "" ||
              errorMessage.passwordCheck !== ""
            }
            type="submit"
          >
            가입완료
          </S.Button>
        </S.ButtonContainer>
      </S.SignupFormContainer>
    </S.SignupFormLayout>
  )
}

export default FirstSignupForm
