import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation } from "@/types"

const fetchConversation = async (): Promise<Conversation[]> => {
  // 인증을 매번 해야하는 번거로움 존재
  try {
    return await AUTH_API.get("messages/conversations").then((res) => res.data)
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
    initialData: [],
  })

  return { data }
}

export default useDMList
