import { useQuery } from "@tanstack/react-query"
import { Message } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import getMessageListAPI from "../apis/getMessageListAPI"

import usePostDetailModalStore from "@/components/PostDetail/stores/usePostDetailModalStore"
import usePostEditModalStore from "@/components/PostEdit/stores/usePostEditModalStore"

export const QUERY_KEY_GET_MESSAGE_LIST =
  "GET_MESSAGE_LIST_14712784127845128534127845712"

const useMessageList = (othersUserId: string) => {
  const { user: authUser, isLoggedIn } = useAuthUserStore()
  const { isShowPostDetail } = usePostDetailModalStore()
  const { isShowEditModal } = usePostEditModalStore()

  const isNotShowModal = !isShowPostDetail && !isShowEditModal

  const { data } = useQuery<Message[]>({
    queryKey: [QUERY_KEY_GET_MESSAGE_LIST, othersUserId, authUser._id],
    queryFn: () => getMessageListAPI(othersUserId, authUser._id),
    refetchInterval: isNotShowModal && 1000,
    enabled: isLoggedIn,
    select: (MessageList: Message[]) =>
      MessageList.sort(
        (message, message2) =>
          Date.parse(message.createdAt) - Date.parse(message2.createdAt),
      ),
  })

  return { data }
}

export default useMessageList
