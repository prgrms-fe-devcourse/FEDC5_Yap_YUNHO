import * as S from "./LoginInputItem.Styles"
import { ChangeEvent, useState } from "react"
import type { UpdateUserInfo, AllowedInputType } from "../types"
import {
  validateEmailInput,
  validatePasswordInput,
} from "@/Pages/Login/utils/validation"
import {
  EMAIL_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
} from "@/Pages/Login/constants/errorMessage"

interface LoginInputItemPropType {
  updateUserInfo: UpdateUserInfo
  type: AllowedInputType
  placeholder: string
}

type InputTypeList = {
  [key in AllowedInputType]: string
}

const LoginInputItem = ({
  updateUserInfo,
  type,
  placeholder,
}: LoginInputItemPropType) => {
  const [errorMessage, setErrorMessage] = useState("")

  const inputTypeList: InputTypeList = {
    email: "text",
    password: "password",
  }

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
      <S.LoginInputItemLayout>
        <S.Input
          type={inputTypeList[type]}
          placeholder={placeholder}
          onChange={handleInput}
        />
      </S.LoginInputItemLayout>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  )
}

export default LoginInputItem
