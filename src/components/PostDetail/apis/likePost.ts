import { AUTH_API } from "@/apis/Api"

export const likePost = async (postId: string) => {
  return await AUTH_API.post("/likes/create", {
    postId,
  })
    .then((res) => {
      res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}

export const unLikePost = () => {}
