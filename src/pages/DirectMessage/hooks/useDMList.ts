import useAuthUserStore from "@/stores/useAuthUserStore"
import { Conversation } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import fetchMessageGroupList from "../apis/fetchMessageGroupList"
export const QUERY_KEY_GET_GROUP_MESSAGELIST = "GET_GROUP_MESSAGELIST"

const useDMList = () => {
  const { myId } = useAuthUserStore()
  const { id: userId } = useParams()
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
    queryFn: fetchMessageGroupList,
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
