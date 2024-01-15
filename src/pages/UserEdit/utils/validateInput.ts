import {
  ValidateUserInfo,
  RequiredUserInfo as ErrorMessageType,
} from "../types"

/**
 * 길이는 4자 이상 10자 이하여야 합니다.
 * 영문 대소문자와 숫자로만 이루어져야 합니다.
 * */
const NICKNAME_REGEX = /^[a-zA-Z0-9]{4,10}$/

const NICKNAME_MIN_LENGTH = 4
const NICKNAME_MAX_LENGTH = 10
const PASSWORD_MIN_LENGTH = 4
const PASSWORD_MAX_LENGTH = 10

const VALIDATE_INPUT_LIST = {
  validateNickName(nickname: string) {
    if (!NICKNAME_REGEX.test(nickname)) {
      return `길이는 ${NICKNAME_MIN_LENGTH}에서 ${NICKNAME_MAX_LENGTH}이며, 영문 대소문자와 숫자만 입력해주세요.`
    }
    return ""
  },
  validatePassword(password: string) {
    if (password.trim().length === 0) {
      return "빈 공백은 입력하면 안됩니다. 비밀번호를 입력해주세요."
    }
    if (password.length < PASSWORD_MIN_LENGTH) {
      return `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`
    }
    if (password.length > PASSWORD_MAX_LENGTH) {
      return `비밀번호는 최대 ${PASSWORD_MAX_LENGTH}자 이하이어야 합니다.`
    }
    return ""
  },
  validatePasswordCheck(password: string, passwordCheck: string) {
    if (password !== passwordCheck) {
      return "비밀번호가 일치하지 않습니다."
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
