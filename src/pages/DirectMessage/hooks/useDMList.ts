import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"
import { Conversation } from "@/types"

interface QueryDMListProps {
  isLoading: boolean
  data: Conversation[]
}
const fetchConversation = async () => {
  return await AUTH_API.get("messages/conversations").then((res) => res.data)
}

const useDMList = (): QueryDMListProps => {
  const { isLoading, data } = useQuery({
    queryKey: ["getDMList"],
    queryFn: fetchConversation,
    refetchInterval: 5000, // 재 요청
  })
  return { isLoading, data }
}

export default useDMList
