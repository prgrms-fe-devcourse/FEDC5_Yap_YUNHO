import { AUTH_API } from "@/apis/Api"
import sendNotification from "@/apis/sendNotification"
import { PostComment } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const SEND_MUTATION_QUERY_KEY = "SEND_MUTATION_MUTATION_KEY_9128178621782"

const useSendComment = () => {
  const queryClient = useQueryClient()
  const sendCommentMutate = useMutation({
    mutationKey: [SEND_MUTATION_QUERY_KEY],
    mutationFn: fetchSendComment,
    onSuccess: (response: PostComment) => {
      sendNotification({
        notificationType: "COMMENT",
        notificationTypeId: response._id,
        userId: response.author._id,
        postId: response.post,
      })

      queryClient.refetchQueries()
    },
  })

  return {
    sendCommentMutate,
  }
}

export default useSendComment

interface SendCommentBody {
  postId: string
  comment: string
}

export const fetchSendComment = async (data: SendCommentBody) => {
  return await AUTH_API.post("/comments/create", data)
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
