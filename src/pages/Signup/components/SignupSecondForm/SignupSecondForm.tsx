import { useState, FormEvent } from "react"
import * as S from "./SignupSecondForm.Styles"
import { theme } from "@/styles/theme"
import useSignupSecondForm from "../../hooks/useSignupSecondForm"
import ProfileImageUpload from "@/components/ProfileImageUpload/ProfileImageUpload"
import { useNavigate } from "react-router-dom"

interface FormDataType {
  binary: FormData
  url: string
}

const SignupSecondForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    binary: new FormData(),
    url: "",
  })
  const { AlertModalComponent, SignupSecondForm_API } = useSignupSecondForm()
  const navigate = useNavigate()

  const updateUserProfile = (event: FormEvent) => {
    event.preventDefault()
    const { binary, url } = formData

    if (url !== "") {
      SignupSecondForm_API.mutate({ formData: binary })
      return
    }
    navigate("/", { replace: true })
  }

  return (
    <>
      {AlertModalComponent}
      <S.SignupFormLayout>
        <S.SignupFormTitle>{"프로필 이미지를 등록해주세요"}</S.SignupFormTitle>
        <S.SignupFormContainer onSubmit={updateUserProfile}>
          <ProfileImageUpload
            setFormData={setFormData}
            initialImage=""
          />
          <S.ButtonContainer>
            <S.Button
              $width={53}
              $color={theme.colors.point}
              type="submit"
            >
              {"완료"}
            </S.Button>
          </S.ButtonContainer>
        </S.SignupFormContainer>
      </S.SignupFormLayout>
    </>
  )
}

export default SignupSecondForm
