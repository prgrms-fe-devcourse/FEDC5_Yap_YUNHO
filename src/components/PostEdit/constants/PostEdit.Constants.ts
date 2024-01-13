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
