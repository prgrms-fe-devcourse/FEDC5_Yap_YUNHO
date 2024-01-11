import standard from "@/assets/standard.jpeg"
import * as S from "./DMList.Styles"
import seenindicator from "@/assets/seenindicator.png"

interface DMListProfileProps {
  isSeen?: boolean
  profileImg: string
}
const DMListProfile = ({ isSeen, profileImg }: DMListProfileProps) => {
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

      {!isSeen && (
        <S.SeenIndicator
          src={seenindicator}
          alt="온라인 표시"
        />
      )}
    </S.DMUserProfileContainer>
  )
}

export default DMListProfile
