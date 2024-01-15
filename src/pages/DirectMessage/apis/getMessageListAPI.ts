import { AUTH_API } from "@/apis/Api"
import { Conversation } from "@/types"

const getMessageListAPI = async (othersUserId: string, myId: string) => {
  if (!othersUserId) {
    return []
  }

  const messageList = await AUTH_API.get(`/messages?userId=${othersUserId}`)
    .then((res) => res.data)
    .catch((e) => {
      console.error(e, "메시지 리스트 요청 실패")
      return []
    })

  // 내가 나한테 보낸 메시지
  if (othersUserId === myId) {
    return messageList.filter(
      (list: Conversation) => list.receiver?._id === list.sender?._id,
    )
  }
  return messageList
}

export default getMessageListAPI
