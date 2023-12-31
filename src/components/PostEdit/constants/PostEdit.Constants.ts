import { EditPostState } from "../PostEdit.Types"

export const NOT_FOUND_IMAGE = {
  URL: "/src/assets/not_found_img.jpg",
  CHECK_KEY: "not_found_Image",
}

export const POST_EDIT_INITIAL_EDIT_POST: EditPostState = {
  thumbnail: NOT_FOUND_IMAGE.CHECK_KEY,
  content: "",
  mediaUrl: "",
  category: "",
  postId: "newPost",
  authorId: "newPost",
}

export const POST_EDIT_EDITOR_PLACEHOLDER = {
  CONTENT_INPUT: "내용을 입력해주세요!",
  URL_INPUT: "클릭 후, URL을 입력해주세요!",
  URL_PROMPT: "URL을 입력해주세요 ✏️",
}

export const POST_EDIT_MODAL_MESSAGE = {
  URL_CONFIRM: "URL을 초기화 하시겠습니까?",
  URL_PROMPT: "등록하실 URL을 입력하신 후 등록 버튼을 눌러주세요!",
  SUBMIT_NEW_POST_CONFIRM: "게시물을 등록 하시겠어요?",
  SUBMIT_UPDATE_POST_CONFIRM: "게시물을 수정 하시겠어요?",
  SUBMIT_COMPLETE: "완료되었습니다!",
}
