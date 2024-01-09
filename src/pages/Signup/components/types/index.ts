import { ChangeEvent } from "react"

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
export type AllowedInputType = "email" | "password" | "nickname"
export interface RequiredUserInfo {
  email: string
  nickname: string
  password: string
  passwordCheck: string
}
