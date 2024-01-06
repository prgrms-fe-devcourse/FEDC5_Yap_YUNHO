import avatar from "@/assets/avatar.png"
import * as S from "./DMList.Styles"
import seenindicator from "@/assets/seenindicator.png"

interface DMListProfileProps {
  seen: boolean
}
const DMListProfile = ({ seen }: DMListProfileProps) => {
  return (
    <S.DMUserProfileContainer>
      <S.DMUserProfileImg
        src={avatar}
        alt="DMList Profile Image"
      />
      {!seen && (
        <S.SeenIndicator
          src={seenindicator}
          alt="읽지 않음 표시"
        />
      )}
    </S.DMUserProfileContainer>
  )
}

export default DMListProfile
