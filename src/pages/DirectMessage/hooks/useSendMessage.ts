import { AUTH_API } from "@/apis/Api"
import { Message } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

interface SendMessageProps {
  message: string
  receiver: string
}
const sendMessage = async (
  messageSubmission: SendMessageProps,
): Promise<Message> => {
  const { data } = await AUTH_API.post("messages/create", messageSubmission)
  return data
}

const useSendMessage = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()

  return useMutation<Message, Error, SendMessageProps>({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getMessageList", id] })
      queryClient.invalidateQueries({ queryKey: ["getDMList"] })
    },
  })
}

export default useSendMessage
