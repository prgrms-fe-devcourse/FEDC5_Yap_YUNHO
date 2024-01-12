import * as S from "./MyMessage.Styles.ts"
import { MessageProps } from "./../../../../DirectMessage.Types"

const MyMessage = ({ children }: MessageProps) => {
  return (
    <S.MyMessageLayout>
      <S.MyMessageContent>{children.message}</S.MyMessageContent>
    </S.MyMessageLayout>
  )
}

export default MyMessage
