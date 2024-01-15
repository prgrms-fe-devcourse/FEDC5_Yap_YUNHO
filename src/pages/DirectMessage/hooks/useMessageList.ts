import { useQuery } from "@tanstack/react-query"
import { Message } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import getMessageListAPI from "../apis/getMessageListAPI"

export const QUERY_KEY_GET_MESSAGELIST = "GET_MESSAGELIST"

const useMessageList = (othersUserId: string) => {
  const { user: my } = useAuthUserStore()
  const { data } = useQuery<Message[]>({
    queryKey: [QUERY_KEY_GET_MESSAGELIST, othersUserId, my._id],
    queryFn: () => getMessageListAPI(othersUserId, my._id),
    initialData: [],
    refetchInterval: 2000, // 재 요청

    select: (MessageList: Message[]) =>
      MessageList.sort(
        (message, message2) =>
          Date.parse(message.createdAt) - Date.parse(message2.createdAt),
      ),
  })

  return { data }
}

export default useMessageList
