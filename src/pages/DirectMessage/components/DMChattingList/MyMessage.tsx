import * as S from "./MyMessage.Styles.ts"
import { MessageProps } from "./../../types/index"

const MyMessage = ({ children }: MessageProps) => {
  return (
    <S.MyMessageLayout>
      <S.MyMessageContent>{children.message}</S.MyMessageContent>
    </S.MyMessageLayout>
  )
}

export default MyMessage
