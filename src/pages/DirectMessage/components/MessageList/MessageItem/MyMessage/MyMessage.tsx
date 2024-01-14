import * as S from "./MyMessage.Styles.ts"
import { MessageProps } from "./../../../../DirectMessage.Types"

const MyMessage = ({ messageData }: MessageProps) => {
  return (
    <S.MyMessageLayout>
      {!messageData.seen && (
        <S.MyMessageReadIndicator>1</S.MyMessageReadIndicator>
      )}

      <S.MyMessageContent>{messageData.message}</S.MyMessageContent>
    </S.MyMessageLayout>
  )
}

export default MyMessage
