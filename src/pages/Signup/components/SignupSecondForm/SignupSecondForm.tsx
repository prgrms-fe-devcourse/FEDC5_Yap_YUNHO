import { useState, FormEvent } from "react"
import * as S from "./SignupSecondForm.Styles"
import { theme } from "@/styles/theme"
import useSignupSecondForm from "../../hooks/useSignupSecondForm"
import ProfileImageUpload from "@/components/ProfileImageUpload/ProfileImageUpload"

const SignupSecondForm = () => {
  const [formData, setFormData] = useState<FormData>(new FormData())
  const { AlertModalComponent, SignupSecondForm_API } = useSignupSecondForm()

  const updateUserProfile = async (event: FormEvent) => {
    event.preventDefault()

    SignupSecondForm_API.mutate({ formData })
  }

  return (
    <>
      {AlertModalComponent}
      <S.SignupFormLayout>
        <S.SignupFormTitle> 추가 회원정보를 입력해주세요 </S.SignupFormTitle>
        <S.SignupFormContainer onSubmit={updateUserProfile}>
          <ProfileImageUpload setFormData={setFormData} />
          <S.ButtonContainer>
            <S.Button
              $width={53}
              $color={theme.colors.point}
              type="submit"
            >
              완료
            </S.Button>
          </S.ButtonContainer>
        </S.SignupFormContainer>
      </S.SignupFormLayout>
    </>
  )
}

export default SignupSecondForm
