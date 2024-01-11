import { User } from "@/types"
const decideChatUserName = (user: User, receiver: User, sender: User): User => {
  if (receiver._id === user._id) {
    return sender
  }
  return receiver
}
export default decideChatUserName
