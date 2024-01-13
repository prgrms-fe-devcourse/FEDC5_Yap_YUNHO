import { useQuery } from "@tanstack/react-query"
import { Message } from "@/types"
import useAuthUserStore from "@/stores/useAuthUserStore"
import fetchMessageList from "../apis/fetchMessageList"

export const QUERY_KEY_GET_MESSAGELIST = "GET_MESSAGELIST"

const useMessageList = (othersId: string) => {
  const { user: my } = useAuthUserStore()
  const { data } = useQuery<Message[]>({
    queryKey: [QUERY_KEY_GET_MESSAGELIST, othersId, my._id],
    queryFn: () => fetchMessageList(othersId, my._id),
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

export default useMessageList

// 상대방으로부터 메시지가 오면 dmlist의 해당 메시지를 읽기처리 한다.
