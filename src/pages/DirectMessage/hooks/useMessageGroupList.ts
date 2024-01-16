import useAuthUserStore from "@/stores/useAuthUserStore"
import { Conversation } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getMessageGroupListAPI from "../apis/getMessageGroupListAPI"
export const QUERY_KEY_GET_GROUP_MESSAGELIST = "GET_GROUP_MESSAGELIST"

const useMessageGroupList = () => {
  const { user } = useAuthUserStore()
  const myId = user._id
  const { userId: othersUserId } = useParams()
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
    queryFn: getMessageGroupListAPI,
    refetchInterval: 1000 * 2,
    gcTime: 1000 * 60 * 5,
    select: (GroupMessageList: Conversation[]) =>
      GroupMessageList.map((MessageList) => {
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
