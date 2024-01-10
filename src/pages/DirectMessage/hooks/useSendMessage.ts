import { AUTH_API } from "@/apis/Api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { QUERY_KEY_GET_GROUP_MESSAGELIST } from "./useDMList"
import { QUERY_KEY_GET_MESSAGELIST } from "./useChattingList"

interface SendMessageProps {
  message: string
  receiver: string
}

const sendMessage = async (messageSubmission: SendMessageProps) => {
  return await AUTH_API.post("messages/create", messageSubmission)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "메시지 요청 실패")
    })
}

const useSendMessage = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      // 그룹 메시지 목록 업데이트
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST, id],
      })
      // 메시지 목록 업데이트
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_GET_MESSAGELIST] })
    },
  })
}

export default useSendMessage
