import * as S from "./OthersMessage.Styles.ts"
import DMListProfile from "../../../DMList/DMListProfile.tsx"
import { MessageProps } from "./../../../../DirectMessage.Types"

const OthersMessage = ({ children }: MessageProps) => {
  return (
    <S.OthersMessageLayout>
      <DMListProfile />
      <S.OthersMessageItemLayout>
        <S.OthersMessageInfoContainer>
          <S.OthersMessageUserName>
            {children.sender.fullName}
          </S.OthersMessageUserName>
          <S.OthersMessageDate>
            {children.createdAt.slice(0, 10)}
          </S.OthersMessageDate>
        </S.OthersMessageInfoContainer>
        <S.OthersMessageContentContainer>
          <S.OthersMessageContent>{children.message}</S.OthersMessageContent>
        </S.OthersMessageContentContainer>
      </S.OthersMessageItemLayout>
    </S.OthersMessageLayout>
  )
}

export default OthersMessage