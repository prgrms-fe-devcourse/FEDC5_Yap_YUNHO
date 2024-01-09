import { ChangeEvent, useState, useEffect } from "react"
import * as S from "./SignupForm.Styles"
import { theme } from "@/styles/theme"
import SignupInputContainer from "./SignupInput/SignupInputContainer"
import type { RequiredUserInfo } from "./types"
import { getNewErrorMessage } from "../utils/validateInput"

const SignupForm = () => {
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

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    setRequiredUserInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
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
      <S.SignupFormContainer
        onSubmit={(e) => {
          e.preventDefault()
          alert("회원가입 시도!")
        }}
      >
        <SignupInputContainer
          requiredUserInfo={requiredUserInfo}
          onChange={handleInput}
          errorMessage={errorMessage}
        />
        <S.ButtonContainer>
          <S.Button
            $width={18}
            $color={theme.colors.sub_alt}
            onClick={() => {
              alert("회원가입 취소!")
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

export default SignupForm
