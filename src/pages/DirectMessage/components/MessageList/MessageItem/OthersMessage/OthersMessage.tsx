import * as S from "./OthersMessage.Styles.ts"
import { MessageProps } from "./../../../../DirectMessage.Types"
import MessageProfile from "./../../../MessageGroupList/MessageProfile"

const OthersMessage = ({ messageData }: MessageProps) => {
  return (
    <S.OthersMessageLayout>
      <MessageProfile
        profileImg={messageData.sender.image}
        isOnline={messageData.sender.isOnline}
      />
      <S.OthersMessageItemLayout>
        <S.OthersMessageInfoContainer>
          <S.OthersMessageUserName>
            {messageData.sender.fullName}
          </S.OthersMessageUserName>
          <S.OthersMessageDate>
            {messageData.createdAt.slice(0, 10)}
          </S.OthersMessageDate>
        </S.OthersMessageInfoContainer>
        <S.OthersMessageContentContainer>
          <S.OthersMessageContent>{messageData.message}</S.OthersMessageContent>
        </S.OthersMessageContentContainer>
      </S.OthersMessageItemLayout>
    </S.OthersMessageLayout>
  )
}

export default OthersMessage
