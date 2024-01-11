import { ChangeEvent } from "react"

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
export type AllowedInputType = "email" | "password" | "nickname" | "file"
export interface RequiredUserInfo {
  email: string
  nickname: string
  password: string
  passwordCheck: string
}
export type AllowedUserInfoType =
  | "email"
  | "password"
  | "nickname"
  | "passwordCheck"

export type ValidateUserInfo = {
  [key in AllowedUserInfoType]: string
}
