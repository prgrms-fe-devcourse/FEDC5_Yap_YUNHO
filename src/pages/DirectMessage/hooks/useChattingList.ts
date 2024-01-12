import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation, Message } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"

export const QUERY_KEY_GET_MESSAGELIST = "GET_MESSAGELIST"

const fetchMessage = async (othersId: string, myId: string) => {
  if (!othersId) {
    return []
  }
  const messageList = await AUTH_API.get(`/messages?userId=${othersId}`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "메시지 리스트 요청 실패")
      return []
    })

  if (othersId === myId) {
    return messageList.filter(
      (list: Conversation) => list.receiver?._id === list.sender?._id,
    )
  }
  return messageList
}

const useChattingList = (othersId: string) => {
  const { user: my } = useAuthUserStore()
  const { data } = useQuery<Message[]>({
    queryKey: [QUERY_KEY_GET_MESSAGELIST, othersId, my._id],
    queryFn: () => fetchMessage(othersId, my._id),
    initialData: [],
    refetchInterval: 1000, // 재 요청

    select: (MessageList: Message[]) =>
      MessageList.sort(
        (message, message2) =>
          Number(message.createdAt.slice(0, 10).replace(/-/g, "")) -
          Number(message2.createdAt.slice(0, 10).replace(/-/g, "")),
      ),
  })

  return { data }
}

export default useChattingList

// 상대방으로부터 메시지가 오면 dmlist의 해당 메시지를 읽기처리 한다.
