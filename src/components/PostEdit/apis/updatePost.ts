import { AUTH_API } from "@/apis/Api"
import { EditPostState } from "../PostEdit.Types"

const updatePost = (updatedData: EditPostState) => {
  const updatedPostBody = {
    title: JSON.stringify({
      mediaUrl: updatedData.mediaUrl,
      thumbnail: updatedData.thumbnail,
      content: updatedData.content,
    }),
    postId: updatedData.postId,
    image: null,
    channelId: updatedData.category,
  }

  const response = AUTH_API.put("/posts/update", updatedPostBody)
    .then(() => true)
    .catch((e) => {
      throw Error(e)
    })

  return response
}

export default updatePost
