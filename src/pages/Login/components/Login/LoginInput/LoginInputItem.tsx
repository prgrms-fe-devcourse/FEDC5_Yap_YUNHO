import * as S from "./LoginInputItem.Styles"
import { ChangeEvent, useState } from "react"
import type { UpdateUserInfo } from "../../../types/index"
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/pages/Login/utils/validation"
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from "@/pages/Login/constants/errorMessage"
import Input from "@/components/Input/Input"

interface LoginInputItemPropType {
  updateUserInfo: UpdateUserInfo
  type: string
  name: string
  placeholder: string
}

const LoginInputItem = ({
  updateUserInfo,
  type,
  name,
  placeholder,
}: LoginInputItemPropType) => {
  const [errorMessage, setErrorMessage] = useState("")

  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (name === "email" && !validateEmailInput(target.value)) {
      updateUserInfo("", name)
      setErrorMessage(EMAIL_ERROR_MESSAGE)
      return
    }

    if (name === "password" && !validatePasswordInput(target.value)) {
      updateUserInfo("", name)
      setErrorMessage(PASSWORD_ERROR_MESSAGE)
      return
    }

    updateUserInfo(target.value, name)
    setErrorMessage("")
  }

  return (
    <>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInput}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  )
}

export default LoginInputItem
