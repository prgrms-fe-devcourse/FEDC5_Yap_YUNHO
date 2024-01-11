import { AUTH_API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"

export const QUERY_KEY_GET_GROUP_MESSAGELIST = "GET_GROUP_MESSAGELIST"

const fetchConversation = async () => {
  // 인증을 매번 해야하는 번거로움 존재
  return await AUTH_API.get("messages/conversations")
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "전체 메시지 목록 받아옴 실패")
      return []
    })
}

const useDMList = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GET_GROUP_MESSAGELIST],
    queryFn: fetchConversation,
    initialData: [],
    refetchInterval: 1000, // 재 요청
  })
  return { data }
}

export default useDMList
