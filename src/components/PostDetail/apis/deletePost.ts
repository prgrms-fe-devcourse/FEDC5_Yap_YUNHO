import { AUTH_API } from "@/apis/Api"

const deletePost = (id: string) => {
  const response = AUTH_API.delete("/posts/delete", {
    data: { id },
  })
    .then((res) => res)
    .catch((e) => {
      throw Error(e)
    })
  return response
}

export default deletePost
