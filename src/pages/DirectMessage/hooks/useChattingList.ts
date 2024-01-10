import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation, Message } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"

export const QUERY_KEY_GET_MESSAGELIST = "GET_MESSAGELIST"

const fetchMessage = async (userId: string, myId: string) => {
  if (!userId) {
    return []
  }

  const messageList = await AUTH_API.get(`/messages?userId=${userId}`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "메시지 리스트 요청 실패")
      return []
    })

  if (userId === myId) {
    return messageList.filter(
      (list: Conversation) => list.receiver?._id === list.sender?._id,
    )
  }
  return messageList
}

const useChattingList = (userId: string) => {
  const { user } = useAuthUserStore()
  const { data } = useQuery<Message[]>({
    queryKey: [QUERY_KEY_GET_MESSAGELIST, userId, user._id],
    queryFn: () => fetchMessage(userId, user._id),
    initialData: [],
    refetchInterval: 1000, // 재 요청
  })

  return { data }
}

export default useChattingList
