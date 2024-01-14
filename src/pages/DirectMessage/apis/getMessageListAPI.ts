import { AUTH_API } from "@/apis/Api"
import { Conversation } from "@/types"

const getMessageListAPI = async (othersUserId: string, myId: string) => {
  const messageList = await AUTH_API.get(`/messages?userId=${othersUserId}`)
    .then((res) => res.data)
    .catch((e) => {
      console.error(e, "메시지 리스트 요청 실패")
      return []
    })

  if (othersUserId === myId) {
    return messageList.filter(
      (list: Conversation) => list.receiver?._id === list.sender?._id,
    )
  }
  return messageList
}

export default getMessageListAPI
