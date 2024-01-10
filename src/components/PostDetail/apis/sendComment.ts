import { AUTH_API } from "@/apis/Api"

interface SendCommentBody {
  postId: string
  comment: string
}

export const sendComment = async (data: SendCommentBody) => {
  return await AUTH_API.post("/comments/create", data)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}
