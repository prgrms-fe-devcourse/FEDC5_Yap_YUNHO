import { ChangeEvent } from "react"

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
export type AllowedInputType =
  | "email"
  | "password"
  | "nickname"
  | "passwordCheck"
export interface RequiredUserInfo {
  email: string
  nickname: string
  password: string
  passwordCheck: string
}

export type ValidateUserInfo = {
  [key in AllowedInputType]: string
}
