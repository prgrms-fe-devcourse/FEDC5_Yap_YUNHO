import OthersMessage from "./OthersMessage/OthersMessage"
import MyMessage from "./MyMessage/MyMessage"
import { MessageProps } from "./../../../DirectMessage.Types"

// 주소의 id는 타인의 아이디
const DMMessageItem = ({ children, othersId }: MessageProps) => {
  const isMyMessage = othersId === children.receiver?._id

  return (
    <>
      {isMyMessage ? (
        <MyMessage>{children}</MyMessage>
      ) : (
        <OthersMessage>{children}</OthersMessage>
      )}
    </>
  )
}

export default DMMessageItem
