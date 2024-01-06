import avatar from "@/assets/avatar.png"
import * as S from "./DMList.Styles"
import seenindicator from "@/assets/seenindicator.png"

const DMListProfile = ({ isSeen }: boolean) => {
  return (
    <S.DMUserProfileContainer>
      <S.DMUserProfileImg
        src={avatar}
        alt="DMList Profile Image"
      />
      {!isSeen && (
        <S.SeenIndicator
          src={seenindicator}
          alt="읽지 않음 표시"
        />
      )}
    </S.DMUserProfileContainer>
  )
}

export default DMListProfile
