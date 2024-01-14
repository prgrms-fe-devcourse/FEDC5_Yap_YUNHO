import { getConvertedCount } from "@/util/getConvertedCount"
import * as S from "./UserFollowInfo.Styles"
import CircleIcon from "@mui/icons-material/Circle"

const UserFollowInfo = () => {
  const following = getConvertedCount(15000)
  const follower = getConvertedCount(321)

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
