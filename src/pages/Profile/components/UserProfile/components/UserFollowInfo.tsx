import * as S from "../UserProfile.Styles"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoLayout>
      <S.UserFollowingInfoContainer>팔로잉 500</S.UserFollowingInfoContainer>
      <S.UserFollowInfoDividerText>·</S.UserFollowInfoDividerText>
      <S.UserFollowerInfoContainer>팔로워 123</S.UserFollowerInfoContainer>
    </S.UserFollowInfoLayout>
  )
}

export default UserFollowInfo
