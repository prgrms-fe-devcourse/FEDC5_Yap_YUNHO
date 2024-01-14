import OthersMessage from "./OthersMessage/OthersMessage"
import MyMessage from "./MyMessage/MyMessage"
import { MessageProps } from "../../../DirectMessage.Types"

// 주소의 id는 타인의 아이디
const MessageItem = ({ children, othersUserId }: MessageProps) => {
  const isMyMessage = othersUserId === children.receiver?._id

  if (isMyMessage) {
    return <MyMessage>{children}</MyMessage>
  }

  return <OthersMessage>{children}</OthersMessage>
}

export default MessageItem
