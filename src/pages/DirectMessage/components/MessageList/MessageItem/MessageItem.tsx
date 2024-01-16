import OthersMessage from "./OthersMessage/OthersMessage"
import MyMessage from "./MyMessage/MyMessage"
import { MessageProps } from "../../../DirectMessage.Types"

const MessageItem = ({ messageData, othersUserId }: MessageProps) => {
  const isMyMessage = othersUserId === messageData.receiver?._id

  if (isMyMessage) {
    return <MyMessage messageData={messageData} />
  }

  return <OthersMessage messageData={messageData} />
}

export default MessageItem
