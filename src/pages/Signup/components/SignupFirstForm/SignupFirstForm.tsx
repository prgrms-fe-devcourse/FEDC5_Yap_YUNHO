import { ChangeEvent, useState, FormEvent } from "react"
import * as S from "./SignupFirstForm.Styles"
import { theme } from "@/styles/theme"
import SignupInputContainer from "../SignupInput/SignupInputContainer"
import { getNewErrorMessage } from "../../utils/validateInput"
import { Navigate, useNavigate } from "react-router-dom"
import useSignupFirstForm from "../../hooks/useSignupFirstForm"

interface SignupFirstFormProp {
  handleChangeForm: () => void
  isLoggedIn: boolean
  changeAlertMessage: (message: string) => void
  showModal: () => void
}

const SignupFirstForm = ({
  handleChangeForm,
  isLoggedIn,
  changeAlertMessage,
  showModal,
}: SignupFirstFormProp) => {
  const { SignupFirstForm_API } = useSignupFirstForm({
    handleChangeForm,
    changeAlertMessage,
    showModal,
  })

  const [requiredUserInfo, setRequiredUserInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  })

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  })

  const navigate = useNavigate()

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const requestBody = {
      email: requiredUserInfo.email,
      fullName: requiredUserInfo.nickname,
      password: requiredUserInfo.password,
    }

    SignupFirstForm_API.mutate(requestBody)
  }

  const validateUserInfo = (userInfoType: string, userInfoValue: string) => {
    const newData = {
      ...requiredUserInfo,
      [userInfoType]: userInfoValue,
    }

    const newErrorMessage = getNewErrorMessage(
      errorMessage,
      userInfoType,
      newData,
    )
    setErrorMessage(newErrorMessage)
  }

  const handleRequiredUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    validateUserInfo(target.name, target.value)

    setRequiredUserInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleDisabled = () => {
    return (
      errorMessage.email !== "" ||
      errorMessage.nickname !== "" ||
      errorMessage.password !== "" ||
      errorMessage.passwordCheck !== "" ||
      requiredUserInfo.email === "" ||
      requiredUserInfo.nickname === "" ||
      requiredUserInfo.password === "" ||
      requiredUserInfo.passwordCheck === ""
    )
  }

  if (isLoggedIn) {
    return (
      <Navigate
        to="/"
        replace={true}
      />
    )
  }

  return (
    <>
      <S.SignupFormLayout>
        <S.SignupFormTitle>{"필수 회원정보를 입력해주세요"}</S.SignupFormTitle>
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
              {"취소"}
            </S.Button>
            <S.Button
              $width={35}
              $color={theme.colors.point}
              disabled={handleDisabled()}
              type="submit"
            >
              {"가입 완료"}
            </S.Button>
          </S.ButtonContainer>
        </S.SignupFormContainer>
      </S.SignupFormLayout>
    </>
  )
}

export default SignupFirstForm
