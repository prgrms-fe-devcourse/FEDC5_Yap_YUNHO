import * as S from "./UserFollowInfo.Styles"
import CircleIcon from "@mui/icons-material/Circle"

const UserFollowInfo = () => {
  return (
    <S.UserFollowInfoLayout>
      <S.UserFollowInfoContainer $position="left">
        팔로잉 4444만
      </S.UserFollowInfoContainer>
      <S.UserFollowInfoDividerContainer>
        <CircleIcon />
      </S.UserFollowInfoDividerContainer>
      <S.UserFollowInfoContainer $position="right">
        팔로워 509
      </S.UserFollowInfoContainer>
    </S.UserFollowInfoLayout>
  )
}

export default UserFollowInfo
