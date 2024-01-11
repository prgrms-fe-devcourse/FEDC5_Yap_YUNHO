import { ChangeEvent } from "react"

export type UpdateUserInfo = (
  value: string,
  type: AllowedLoginInputType,
) => void

export type AllowedLoginInputType = "email" | "password"
export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
