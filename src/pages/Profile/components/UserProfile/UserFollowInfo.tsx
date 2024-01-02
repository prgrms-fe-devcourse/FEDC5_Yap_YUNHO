import * as S from "@/pages/Profile/styles/UserProfile.styles"
import * as GS from "@/styles/Profile.styles"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoSection>
      <GS.UserInfoContainer>팔로잉: 1억</GS.UserInfoContainer>
      <GS.UserInfoContainer>팔로워: 1억</GS.UserInfoContainer>
    </S.UserFollowInfoSection>
  )
}

export default UserFollowInfo
