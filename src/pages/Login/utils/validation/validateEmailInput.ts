import { LOGIN_PAGE_ERROR_MESSAGE } from "@/constants/errorMessage"
import { EMAIL_REGEX } from "../../constants/emailValidation"

export const validateEmailInput = (email: string): string => {
  if (!EMAIL_REGEX.test(email)) {
    return LOGIN_PAGE_ERROR_MESSAGE.EMAIL_ERROR_MESSAGE
  }
  return ""
}
