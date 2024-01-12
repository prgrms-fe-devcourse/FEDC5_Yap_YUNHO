import { AUTH_API } from "@/apis/Api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEY_GET_GROUP_MESSAGELIST } from "./useDMList"
import { QUERY_KEY_GET_MESSAGELIST } from "./useChattingList"

interface SendMessageProps {
  message: string
  receiver: string
}

const sendMessage = async (messageSubmission: SendMessageProps) => {
  await AUTH_API.post("messages/create", messageSubmission)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "메시지 보내기 요청 실패")
    })

  await AUTH_API.put("/messages/update-seen", {
    sender: messageSubmission.receiver,
  })
    .then()
    .catch((e) => {
      console.log(e, "메시지 읽음 처리 실패")
    })
}

const useSendMessage = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      // 그룹 메시지 목록 업데이트
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
      })
      // 메시지 목록 업데이트
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_GET_MESSAGELIST] })
    },
  })
}

export default useSendMessage

// 내가 상대방에게 메시지를 보낼때마다 업데이트 처리를 해야한다.
