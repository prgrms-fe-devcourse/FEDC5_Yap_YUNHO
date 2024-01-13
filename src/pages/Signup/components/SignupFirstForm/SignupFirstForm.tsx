import { ChangeEvent, useState, FormEvent } from "react"
import * as S from "./SignupFirstForm.Styles"
import { theme } from "@/styles/theme"
import SignupInputContainer from "../SignupInput/SignupInputContainer"
import { getNewErrorMessage } from "../../utils/validateInput"
import { useNavigate } from "react-router-dom"
import useSignupFirstForm from "../../hooks/useSignupFirstForm"

interface FirstSignupFormProp {
  handleSelectedFormComponent: (authToken: string) => void
}

const FirstSignupForm = ({
  handleSelectedFormComponent,
}: FirstSignupFormProp) => {
  const { AlertModalComponent, SignupFirstForm_API } = useSignupFirstForm({
    handleSelectedFormComponent,
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

  return (
    <>
      {AlertModalComponent}
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
              disabled={handleDisabled()}
              type="submit"
            >
              가입완료
            </S.Button>
          </S.ButtonContainer>
        </S.SignupFormContainer>
      </S.SignupFormLayout>
    </>
  )
}

export default FirstSignupForm
