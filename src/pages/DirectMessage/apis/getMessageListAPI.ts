import { AUTH_API } from "@/apis/Api"
import { Conversation } from "@/types"

const getMessageListAPI = async (othersId: string, myId: string) => {
  if (!othersId) {
    return []
  }
  const messageList = await AUTH_API.get(`/messages?userId=${othersId}`)
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "메시지 리스트 요청 실패")
      return []
    })

  if (othersId === myId) {
    return messageList.filter(
      (list: Conversation) => list.receiver?._id === list.sender?._id,
    )
  }
  return messageList
}

export default getMessageListAPI
