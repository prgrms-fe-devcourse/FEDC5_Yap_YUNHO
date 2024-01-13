import standard from "@/assets/standard.jpeg"
import * as S from "./DMList.Styles"
import seenindicator from "@/assets/seenindicator.png"

interface DMListProfileProps {
  isOnline?: boolean
  profileImg: string
}
const DMListProfile = ({ isOnline, profileImg }: DMListProfileProps) => {
  return (
    <S.DMUserProfileContainer>
      {profileImg ? (
        <S.DMUserProfileImg
          src={profileImg}
          alt="DMList Profile Image"
        />
      ) : (
        <S.DMUserProfileImg
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
    </S.DMUserProfileContainer>
  )
}

export default DMListProfile
