import * as S from "./UserFollowInfo.Styles"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoLayout>
      <S.UserFollowInfoContainer>팔로잉 5090</S.UserFollowInfoContainer>
      <S.UserFollowInfoDividerText>·</S.UserFollowInfoDividerText>
      <S.UserFollowInfoContainer>팔로워 123</S.UserFollowInfoContainer>
    </S.UserFollowInfoLayout>
  )
}

export default UserFollowInfo
