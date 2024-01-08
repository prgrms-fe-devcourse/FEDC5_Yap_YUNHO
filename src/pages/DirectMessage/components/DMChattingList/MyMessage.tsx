import * as S from "./MyMessage.Styles.ts"
import { Message } from "@/types"

interface MyMessageProps {
  children: Message
}

const MyMessage = ({ children }: MyMessageProps) => {
  return (
    <S.MyMessageLayout>
      <S.MyMessageContent>{children.message}</S.MyMessageContent>
    </S.MyMessageLayout>
  )
}

export default MyMessage
