import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "@/pages/Login/constants/passwordValidation"
import {
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
} from "@/pages/Signup/utils/validateInput"

export const API_ERROR_MESSAGE = {
  CHECK_IS_OBJECT: "is not Object. ❌",
}

export const NAVBAR_ERROR_MESSAGE = {
  REDIRECT_AUTH_USER: `오류가 발생했어요!🤦 죄송하지만 다시 로그인 해주세요..`,
}

export const POST_EDIT_ERROR_MESSAGE = {
  AUTH_CHECKER: {
    NOT_LOGIN: "로그인이 필요해요 🖐️ 로그인 후 이용해 주세요!",
    NO_PERMISSION: "어떻게 들어오셨나요?... 접근이 불가능합니다.",
  },

  URL_PROMPT: { ERROR_URL: "유효하지 않은 URL 입니다!!" },

  POST_SUBMIT: {
    NEW_POST: "등록에 실패했습니다 다시 시도해주세요.. 🥹",
    UPDATE_POST: "수정에 실패했습니다 다시 시도해주세요.. 🥹",
  },

  SUBMIT_VALIDATION: {
    CATEGORY: "이런.. 카테고리를 꼭 설정해주세요!",
    MEDIA_RUL: "저런.. 추천하시는 음악의 URL을 넣어주세요!",
    CONTENT: "아이고.. 올바른 제목을 입력해 주세요~",
  },
}

export const POST_DETAIL_ERROR_MESSAGE = {
  POST: {
    DELETE: "🤷‍♂️ 게시물 삭제에 실패하였습니다! 다시 시도해주세요!",
    LIKE: "잠시 후 다시 시도해주세요!",
    UNLIKE: "잠시 후 다시 시도해주세요!",
  },
  USER: {
    FOLLOW:
      "광클... 하신거 아니죠? 팔로우 과정에서 오류가 발생했습니다. 다시 시도해주세요!",
    UN_FOLLOW:
      "광클... 하신거 아니죠? 언 팔로우 과정에서 오류가 발생했습니다. 다시 시도해주세요!",
  },
  COMMENT: {
    DELETE: "삭제과정에서 오류가 발생했습니다. 다시 시도해주세요!",
  },

  COMMENT_SUBMIT: {
    ERROR: "잠시 후 다시 시도해주세요!",
  },

  SUBMIT_VALIDATION: {
    COMMENT: "올바른 댓글을 작성해주세요!",
  },
}

export const PROFILE_PAGE_ERROR_MESSAGE = {
  GET_OTHER_USER: "오류가 발생했습니다.\n 다시 시도 해주세요!",
}

export const DM_ERROR = {
  SEND_MESSAGE: "메시지를 보내는데 실패했습니다",
}

export const LOGIN_PAGE_ERROR_MESSAGE = {
  EMAIL_ERROR_MESSAGE: "이런.. 유효한 이메일을 입력해주세요.🖐️",
  PASSWORD_ERROR_MESSAGE: `저런.. 비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.🙌`,
  LOGIN_REQUEST_ERROR:
    "아이고.. 잘못된 이메일이거나 잘못된 비밀번호의 조합입니다.🖐️",
}

export const SIGNUP_ERROR_MESSAGE = {
  VALIDATE: {
    EMAIL_ERROR: "에헤이.. 유효한 이메일을 입력해주세요.",
    NICK_NAME: `닉네임은 ${NICKNAME_MIN_LENGTH}에서 ${NICKNAME_MAX_LENGTH}이며, 영문 대소문자와 숫자만 입력해주세요.`,
    PASSWORD: {
      EMPTY_PASSWORD:
        "이런.. 빈 공백은 입력하면 안됩니다. 비밀번호를 입력해주세요.🖐️",
      MIN_PASSWORD_LENGTH: `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.🤷‍♂️`,
      MAX_PASSWORD_LENGTH: `비밀번호는 최대 ${PASSWORD_MAX_LENGTH}자 이하이어야 합니다.🤷‍♂️`,
      CHECK_SAME_PASSWORD: "비밀번호가 일치하지 않습니다.🚨",
    },
  },

  FIRST_SIGNUP_REQUEST_ERROR: {
    USED_EMAIL: "이미 가입된 이메일입니다. 다른 이메일을 사용해 주세요!🙌",
    API_ERROR: "회원가입에 실패했습니다 🥹 다시 시도 해주세요. ",
  },

  SECOND_SIGNUP_REQUEST_ERROR: {
    PROFILE_IMAGE: "프로필 이미지 등록에 실패했습니다 🤦 다시 시도 해주세요.",
  },
}

export const USER_EDIT_ERROR_MESSAGE = {
  VALIDATE: {
    NICKNAME: `닉네임은 ${NICKNAME_MIN_LENGTH}에서 ${NICKNAME_MAX_LENGTH}이며, 영문 대소문자와 숫자만 입력해주세요.`,
    PASSWORD: {
      EMPTY_PASSWORD: "빈 공백은 입력하면 안됩니다. 비밀번호를 입력해주세요.",
      MIN_PASSWORD_LENGTH: `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.🤷‍♂️`,
      MAX_PASSWORD_LENGTH: `비밀번호는 최대 ${PASSWORD_MAX_LENGTH}자 이하이어야 합니다.🤷‍♂️`,
      CHECK_SAME_PASSWORD: "비밀번호가 일치하지 않습니다.🚨",
    },
  },

  NICKNAME_REQUEST_FAIL: "이런.. 닉네임 변경을 다시 시도해주세요",
  PASSWORD_REQUEST_FAIL: "저런.. 비밀번호 변경에 실패했습니다.",
  PROFILE_IMAGE_REQUEST_FAIL: "아이고.. 프로필 이미지 변경을 다시 시도해주세요",
}
