import * as S from "./UserFollowInfo.Styles"
import CircleIcon from "@mui/icons-material/Circle"
import { convertFollowCount } from "./utils/convertFollowCount"

const UserFollowInfo = () => {
  const following = convertFollowCount(44343324)
  const follower = convertFollowCount(321)

  return (
    <S.UserFollowInfoLayout>
      <S.UserFollowInfoContainer $position="left">
        팔로잉 {following}
      </S.UserFollowInfoContainer>
      <S.UserFollowInfoDividerContainer>
        <CircleIcon />
      </S.UserFollowInfoDividerContainer>
      <S.UserFollowInfoContainer $position="right">
        팔로워 {follower}
      </S.UserFollowInfoContainer>
    </S.UserFollowInfoLayout>
  )
}

export default UserFollowInfo
