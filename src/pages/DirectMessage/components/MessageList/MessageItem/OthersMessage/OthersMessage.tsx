import * as S from "./OthersMessage.Styles.ts"
import { MessageProps } from "./../../../../DirectMessage.Types"
import MessageProfile from "../../../MessageGroupList/MessageGroupUserlist/MessageProfile/MessageProfile.tsx"
import UserInfoPopover from "@/components/UserInfoPopover/UserInfoPopover.tsx"

const OthersMessage = ({ messageData }: MessageProps) => {
  return (
    <S.OthersMessageLayout>
      <UserInfoPopover
        user={messageData.sender}
        isRight={true}
      >
        <MessageProfile
          profileImg={messageData.sender.image}
          isOnline={messageData.sender.isOnline}
        />
      </UserInfoPopover>
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
