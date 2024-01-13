import { ChangeEvent } from "react"

export type UpdateUserInfo = (value: string, type: string) => void

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
