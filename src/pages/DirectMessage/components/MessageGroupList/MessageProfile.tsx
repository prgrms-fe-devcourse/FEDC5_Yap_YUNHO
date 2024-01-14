import standard from "@/assets/standard.jpeg"
import * as S from "./MessageList.Styles"
import seenindicator from "@/assets/seenindicator.png"

interface MessageProfileProps {
  isOnline?: boolean
  profileImg: string
}
const MessageProfile = ({ isOnline, profileImg }: MessageProfileProps) => {
  const checkedImg = profileImg || standard

  return (
    <S.MessageProfileContainer>
      <S.MessageProfileImg
        src={checkedImg}
        alt="DMList Profile Image"
      />

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
