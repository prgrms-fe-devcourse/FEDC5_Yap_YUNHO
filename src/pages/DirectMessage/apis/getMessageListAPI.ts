import { AUTH_API } from "@/apis/Api"
import { Conversation } from "@/types"

const getMessageListAPI = async (othersUserId: string, myId: string) => {
  console.log("!11")
  if (!othersUserId) {
    return []
  }

  const messageList = await AUTH_API.get(`/messages?userId=${othersUserId}`)
    .then((res) => res.data)
    .catch(() => {
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
