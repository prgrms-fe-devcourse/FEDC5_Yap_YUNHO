import * as S from "./OthersMessage.Styles.ts"
import DMListProfile from "../DMList/DMListProfile.tsx"
import { Message } from "@/types"

interface OthersMessageProps {
  children: Message
}

const OthersMessage = ({ children }: OthersMessageProps) => {
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
