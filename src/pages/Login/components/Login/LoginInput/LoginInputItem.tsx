import * as S from "./LoginInputItem.Styles"
import { ChangeEvent, useState } from "react"
import type { UpdateUserInfo } from "../../../types/index"
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/pages/Login/utils/validation"
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
    if (target.name === "email") {
      const newErrorMessage = validateEmailInput(target.value)
      if (newErrorMessage !== "") {
        updateUserInfo("", target.name)
        setErrorMessage(newErrorMessage)
        return
      }
    }

    if (target.name === "password") {
      const newErrorMessage = validatePasswordInput(target.value)
      if (newErrorMessage !== "") {
        updateUserInfo("", target.name)
        setErrorMessage(newErrorMessage)
        return
      }
    }

    updateUserInfo(target.value, target.name)
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
