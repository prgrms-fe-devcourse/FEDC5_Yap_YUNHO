import MyMessage from "./MyMessage"
import OthersMessage from "./OthersMessage"
import { MessageProps } from "./../../types/index"

// 주소의 id는 타인의 아이디
const DMMessageItem = ({ children, id }: MessageProps) => {
  if (!children.receiver || !children.sender) {
    return
  }
  const isMyMessage =
    id === children.receiver._id ||
    children.receiver._id === children.sender._id // 내 채팅방

  // 오른쪽 메시지(내가 보내는거)
  // 왼쪽 메시지(내가 받은거)
  //
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
