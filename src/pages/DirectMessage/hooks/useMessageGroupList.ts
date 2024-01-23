import useAuthUserStore from "@/stores/useAuthUserStore"
import { Conversation } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getMessageGroupListAPI from "../apis/getMessageGroupListAPI"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"
import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"

export const QUERY_KEY_GET_GROUP_MESSAGE_LIST =
  "GET_GROUP_MESSAGE_LIST_72154682516375217"

const useMessageGroupList = () => {
  const { user } = useAuthUserStore()
  const myId = user._id
  const { userId: othersUserId } = useParams()
  const { isShowEditModal } = usePostEditModalStore()
  const { isShowPostDetail } = usePostDetailModalStore()

  const isNotShowModal = !isShowEditModal && !isShowPostDetail

  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGE_LIST],
    queryFn: getMessageGroupListAPI,
    refetchInterval: isNotShowModal && 1000 * 2,
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
