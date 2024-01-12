import * as S from "./MyMessage.Styles.ts"
import { MessageProps } from "./../../../../DirectMessage.Types"

const MyMessage = ({ children }: MessageProps) => {
  return (
    <S.MyMessageLayout>
      {!children.seen && <S.MyMessageReadIndicator>1</S.MyMessageReadIndicator>}

      <S.MyMessageContent>{children.message}</S.MyMessageContent>
    </S.MyMessageLayout>
  )
}

export default MyMessage
