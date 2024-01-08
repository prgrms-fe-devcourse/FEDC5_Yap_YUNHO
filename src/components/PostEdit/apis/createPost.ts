import { AUTH_API } from "@/apis/Api"
import { EditPostState } from "../PostEdit.Types"

const createPost = (newPost: EditPostState) => {
  const newPostBody = {
    title: JSON.stringify({
      mediaUrl: newPost.mediaUrl,
      thumbnail: newPost.thumbnail,
      content: newPost.content,
    }),
    image: null,
    channelId: newPost.category,
  }

  const response = AUTH_API.post("/posts/create", newPostBody)
    .then(() => {
      return true
    })
    .catch((e) => {
      console.error(e)
      return false
    })

  return response
}

export default createPost
