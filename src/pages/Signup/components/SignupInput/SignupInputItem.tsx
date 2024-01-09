import React from "react"
import * as S from "./SignupInputItem.Styles"

interface SignupInputItemProp {
  title: string
  errorMessage: string
  additionalInput?: React.ReactNode
}

const SignupInputItem = ({
  title,
  errorMessage,
  additionalInput,
}: SignupInputItemProp) => {
  return (
    <S.SingupInputItem>
      <div>{title}</div>
      <input style={{ width: "27rem" }} />
      {additionalInput}
      <div>{errorMessage}</div>
    </S.SingupInputItem>
  )
}

export default SignupInputItem
