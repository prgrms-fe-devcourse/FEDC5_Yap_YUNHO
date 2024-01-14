import useAuthUserStore from "@/stores/useAuthUserStore"
import { Conversation } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getMessageGroupListAPI from "../apis/getMessageGroupListAPI"
export const QUERY_KEY_GET_GROUP_MESSAGELIST = "GET_GROUP_MESSAGELIST"

const useMessageGroupList = () => {
  const { myId } = useAuthUserStore()
  const { id: othersUserId } = useParams()
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
    queryFn: getMessageGroupListAPI,
    initialData: [],
    refetchInterval: 1000, // 재 요청

    select: (GroupMessageList: Conversation[]) =>
      GroupMessageList.map((MessageList) => {
        // 최근에 보낸 메시지가 내가 보낸거거나 채팅을 하고 있을때 자동으로 읽음 처리
        return {
          ...MessageList,
          seen:
            myId === MessageList.sender._id ||
            othersUserId === MessageList.sender._id
              ? true
              : MessageList.seen,
        }
      }),
  })
  return { data }
}

export default useMessageGroupList
