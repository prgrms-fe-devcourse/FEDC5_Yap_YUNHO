import { UsePostData } from "@/types"

export const POST_EDIT_INITIAL_EDIT_POST: UsePostData = {
  authUserProfile: "",
  thumbnail: "",
  content: "",
  mediaUrl: "",
}

export const POST_EDIT_EDITOR_PLACEHOLDER = {
  CONTENT_INPUT: "내용을 입력해주세요!",
  URL_INPUT: "클릭 후, URL을 입력해주세요!",
  URL_PROMPT: "URL을 입력해주세요 ✏️",
}
