import MyMessage from "./MyMessage"
import OthersMessage from "./OthersMessage"
import { Message } from "@/types"

interface DMMessageItemProps {
  children: Message
}

// 여기서 MyMessage, OtherMessage거르기
const DMMessageItem = ({ children }: DMMessageItemProps) => {
  console.log(children)
  return (
    <>
      <OthersMessage>{children}</OthersMessage>
      <MyMessage>{children}</MyMessage>
      <OthersMessage>{children}</OthersMessage>
      <MyMessage>{children}</MyMessage>
    </>
  )
}

export default DMMessageItem

// 메시지는 시간순서대로
// 내가보낸거 남이보낸거 구분해서 왼쪽 오른쪽으로 정렬시켜야함
// receiver가 나일때는 메시지를 왼쪽으로
// receiver가 내가아닐때는 메시지를 오른쪽으로
