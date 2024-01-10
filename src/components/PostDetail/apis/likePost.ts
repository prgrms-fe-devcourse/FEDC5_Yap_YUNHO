import { AUTH_API } from "@/apis/Api"

export const likePost = async (postId: string) => {
  return await AUTH_API.post("/likes/create", {
    postId,
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}

export const unLikePost = async (likeId: string) => {
  return await AUTH_API.delete("/likes/delete", {
    data: { id: likeId },
  })
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}
