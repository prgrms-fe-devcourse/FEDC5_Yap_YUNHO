import React from "react"
import * as S from "./SignupForm.Styles"
import { theme } from "@/styles/theme"
import SignupInputContainer from "./Input/SignupInputContainer"

const SignupForm = () => {
  return (
    <S.SignupFormLayout>
      <S.SignupFormTitle> 필수 회원정보를 입력해주세요 </S.SignupFormTitle>
      <S.SignupFormContainer>
        <SignupInputContainer />
      </S.SignupFormContainer>
      <S.ButtonContainer>
        <S.Button
          $width={8.1}
          $color={theme.colors.sub_alt}
        >
          취소
        </S.Button>
        <S.Button
          $width={18.9}
          $color={theme.colors.point}
        >
          가입완료
        </S.Button>
      </S.ButtonContainer>
    </S.SignupFormLayout>
  )
}

export default SignupForm
