import { User } from "@/types"
const decideChatUserName = (
  myId: string,
  receiver: User,
  sender: User,
): User => {
  if (receiver._id === myId) {
    return sender
  }
  return receiver
}
export default decideChatUserName
