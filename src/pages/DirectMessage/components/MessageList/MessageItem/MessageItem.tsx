import OthersMessage from "./OthersMessage/OthersMessage"
import MyMessage from "./MyMessage/MyMessage"
import { MessageProps } from "../../../DirectMessage.Types"

// 주소의 id는 타인의 아이디
const MessageItem = ({ messageData, othersUserId }: MessageProps) => {
  const isMyMessage = othersUserId === messageData.receiver?._id

  if (isMyMessage) {
    return <MyMessage>{messageData}</MyMessage>
  }

  return <OthersMessage>{messageData}</OthersMessage>
}

export default MessageItem
