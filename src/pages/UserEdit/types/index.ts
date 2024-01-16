import { ChangeEvent } from "react"

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
export interface RequiredUserInfo {
  nickname: string
  password: string
  passwordCheck: string
}

export type AllowedUserInfoType = "password" | "nickname" | "passwordCheck"

export type ValidateUserInfo = {
  [key in AllowedUserInfoType]: string
}
