import { USER_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"
import {
  ValidateUserInfo,
  RequiredUserInfo as ErrorMessageType,
} from "../types"

/**
 * 길이는 4자 이상 10자 이하여야 합니다.
 * 영문 대소문자와 숫자로만 이루어져야 합니다.
 * */
const NICKNAME_REGEX = /^[a-zA-Z0-9]{4,10}$/

export const NICKNAME_MIN_LENGTH = 4
export const NICKNAME_MAX_LENGTH = 10
export const PASSWORD_MIN_LENGTH = 4
export const PASSWORD_MAX_LENGTH = 10

const VALIDATE_INPUT_LIST = {
  validateNickName(nickname: string) {
    if (!NICKNAME_REGEX.test(nickname)) {
      return USER_EDIT_ERROR_MESSAGE.VALIDATE.NICKNAME
    }
    return ""
  },
  validatePassword(password: string) {
    if (password.trim().length === 0) {
      return USER_EDIT_ERROR_MESSAGE.VALIDATE.PASSWORD.EMPTY_PASSWORD
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
      return USER_EDIT_ERROR_MESSAGE.VALIDATE.PASSWORD.MIN_PASSWORD_LENGTH
    }

    if (password.length > PASSWORD_MAX_LENGTH) {
      return USER_EDIT_ERROR_MESSAGE.VALIDATE.PASSWORD.MAX_PASSWORD_LENGTH
    }
    return ""
  },
  validatePasswordCheck(password: string, passwordCheck: string) {
    if (password !== passwordCheck) {
      return USER_EDIT_ERROR_MESSAGE.VALIDATE.PASSWORD.CHECK_SAME_PASSWORD
    }
    return ""
  },
}

export const getNewErrorMessage = (
  errorMessage: ErrorMessageType,
  type: string,
  userInfo: ValidateUserInfo,
) => {
  const { nickname, password, passwordCheck } = userInfo

  switch (type) {
    case "nickname": {
      return {
        ...errorMessage,
        nickname: VALIDATE_INPUT_LIST.validateNickName(nickname),
      }
    }
    case "password": {
      return {
        ...errorMessage,
        password: VALIDATE_INPUT_LIST.validatePassword(password),
        passwordCheck: VALIDATE_INPUT_LIST.validatePasswordCheck(
          password,
          passwordCheck,
        ),
      }
    }
    case "passwordCheck": {
      return {
        ...errorMessage,
        password: VALIDATE_INPUT_LIST.validatePassword(password),
        passwordCheck: VALIDATE_INPUT_LIST.validatePasswordCheck(
          password,
          passwordCheck,
        ),
      }
    }
    default:
      return errorMessage
  }
}
