import { AUTH_API } from "@/apis/Api"

const deleteComment = (commentId: string) => {
  return AUTH_API.delete("/comments/delete", {
    data: { id: commentId },
  })
    .then((res) => res.data)
    .catch((error) => {
      throw Error(error)
    })
}

export default deleteComment
