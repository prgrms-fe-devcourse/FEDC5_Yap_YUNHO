import { MIN_LENGTH } from "../../constants/passwordValidation"

export const validatePasswordInput = (password: string) => {
  return password.length >= MIN_LENGTH
}
