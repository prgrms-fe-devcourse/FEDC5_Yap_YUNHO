import * as PS from "../../styles/UserProfile.Styles"
import * as S from "./UserProfile.Styles"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoSection>
      <PS.UserInfoContainer>팔로잉 500</PS.UserInfoContainer>
      <S.UserFollowInfoDividerText>·</S.UserFollowInfoDividerText>
      <PS.UserInfoContainer>팔로워 123</PS.UserInfoContainer>
    </S.UserFollowInfoSection>
  )
}

export default UserFollowInfo
