import * as S from "./LoginInputItem.Styles"
import { ChangeEvent, useState } from "react"
import type {
  UpdateUserInfo,
  AllowedLoginInputType,
} from "../../../types/index"
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/pages/Login/utils/validation"
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from "@/pages/Login/constants/errorMessage"
import Input from "./Input"

interface LoginInputItemPropType {
  updateUserInfo: UpdateUserInfo
  type: AllowedLoginInputType
  placeholder: string
}

const LoginInputItem = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputItemPropType) => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (type === "email" && !validateEmailInput(target.value)) {
      updateUserInfo("", type)
      setErrorMessage(EMAIL_ERROR_MESSAGE)
      return
    }

    if (type === "password" && !validatePasswordInput(target.value)) {
      updateUserInfo("", type)
      setErrorMessage(PASSWORD_ERROR_MESSAGE)
      return
    }

    updateUserInfo(target.value, type)
    setErrorMessage("")
  }

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  )
}

export default LoginInputItem
