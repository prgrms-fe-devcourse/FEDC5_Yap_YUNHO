import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation, Message } from "@/types"

const fetchMessage = async (userId: string): Promise<Message[]> => {
  try {
    if (!userId) {
      return []
    }

    const myId = await AUTH_API.get("auth-user").then((res) => res.data._id)
    const messageList = await AUTH_API.get(`/messages?userId=${userId}`).then(
      (res) => {
        if (myId && res.data._id) {
          return res.data.filter(
            (list: Conversation) => list.receiver._id === list.sender?._id,
          )
        }
        return res.data
      },
    )
    return messageList
  } catch (e) {
    console.log(e)
    return []
  }
}

const useChattingList = (userId: string) => {
  const { data } = useQuery<Message[]>({
    queryKey: ["getMessageList", userId],
    queryFn: () => fetchMessage(userId),
    initialData: [],
    refetchInterval: 1000, // 재 요청
  })

  return { data }
}

export default useChattingList
