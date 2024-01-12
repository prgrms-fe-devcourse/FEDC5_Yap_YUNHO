import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { Conversation, User } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
export const QUERY_KEY_GET_GROUP_MESSAGELIST = "GET_GROUP_MESSAGELIST"

const fetchConversation = async () => {
  // 인증을 매번 해야하는 번거로움 존재
  return await AUTH_API.get("messages/conversations")
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "전체 메시지 목록 받아옴 실패")
      return []
    })
}

const useDMList = () => {
  const { myId } = useAuthUserStore()
  const { id: userId } = useParams()
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
    queryFn: fetchConversation,
    initialData: [],
    refetchInterval: 1000, // 재 요청

    select: (GroupMessageList: Conversation[]) =>
      GroupMessageList.map((MessageList) => {
        // 최근에 보낸 메시지가 내가 보낸거면 채팅을 하고 있거나 읽음 처리
        if (
          myId === MessageList.sender._id ||
          userId === MessageList.sender._id
        ) {
          return {
            ...MessageList,
            seen: true,
          }
        } else {
          return MessageList
        }
      }),
  })
  return { data }
}

export default useDMList
