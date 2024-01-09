import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation } from "@/types"

const fetchConversation = async (): Promise<Conversation[]> => {
  // 인증을 매번 해야하는 번거로움 존재
  try {
    const myId = await AUTH_API.get("auth-user").then((res) => res.data._id)
    const conversations = await AUTH_API.get("messages/conversations").then(
      (res) => {
        if (myId && res.data._id) {
          return res.data.filter(
            (list: Conversation) => list.receiver._id === list.sender?._id,
          )
        }
        return res.data
      },
    )
    return conversations
  } catch (e) {
    console.log(e)
    return []
  }
}

const useDMList = () => {
  const { data } = useQuery<Conversation[]>({
    queryKey: ["getDMList"],
    queryFn: fetchConversation,
    refetchInterval: 5000, // 재 요청
  })

  return { data }
}

export default useDMList
