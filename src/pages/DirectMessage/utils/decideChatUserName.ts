import { User } from "@/types"
import { handleMessageGroupClickProps } from "./../DirectMessage.Types"

const decideChatUserName = ({
  myId,
  receiver,
  sender,
}: handleMessageGroupClickProps): User => {
  if (receiver._id === myId) {
    return sender
  }
  return receiver
}
export default decideChatUserName
