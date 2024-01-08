import React from "react"
import * as S from "./SignupInputItem.Styles"
import Input from "./Input"
import type { AllowedInputType } from "../../types"
interface SignupInputItemProp {
  title?: string
  type: AllowedInputType
  placeholder: string
  errorMessage?: string
}

const SignupInputItem = ({
  title,
  type,
  placeholder,
  errorMessage,
}: SignupInputItemProp) => {
  return (
    <S.SingupInputItem>
      <div>{title}</div>

      <Input
        type={type}
        placeholder={placeholder}
      />

      <div>{errorMessage}</div>
    </S.SingupInputItem>
  )
}

export default SignupInputItem
