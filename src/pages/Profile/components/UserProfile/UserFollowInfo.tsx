import * as PS from "../../Profile.Styles"
import * as S from "./UserProfile.Styles"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoLayout>
      <PS.UserInfoContainer>팔로잉 500</PS.UserInfoContainer>
      <S.UserFollowInfoDividerText>·</S.UserFollowInfoDividerText>
      <PS.UserInfoContainer>팔로워 123</PS.UserInfoContainer>
    </S.UserFollowInfoLayout>
  )
}

export default UserFollowInfo
