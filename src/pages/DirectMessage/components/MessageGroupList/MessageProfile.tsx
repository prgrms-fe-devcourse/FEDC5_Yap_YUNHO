import standard from "@/assets/standard.jpeg"
import * as S from "./MessageList.Styles"
import seenindicator from "@/assets/seenindicator.png"

interface MessageProfileProps {
  isOnline?: boolean
  profileImg: string
}
const MessageProfile = ({ isOnline, profileImg }: MessageProfileProps) => {
  return (
    <S.MessageProfileContainer>
      {profileImg ? (
        <S.MessageProfileImg
          src={profileImg}
          alt="DMList Profile Image"
        />
      ) : (
        <S.MessageProfileImg
          src={standard}
          alt="DMList Profile Standard Image"
        />
      )}

      {isOnline && (
        <S.SeenIndicator
          src={seenindicator}
          alt="온라인 표시"
        />
      )}
    </S.MessageProfileContainer>
  )
}

export default MessageProfile
