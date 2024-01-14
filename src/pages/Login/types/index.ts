import { ChangeEvent } from "react"

export type UpdateUserInfo = (value: string, type: string) => void

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void

export interface RequiredUserInfo {
  email: string
  password: string
}

export type AllowedUserInfoType = "email" | "password"

export type ValidateUserInfo = {
  [key in AllowedUserInfoType]: string
}
