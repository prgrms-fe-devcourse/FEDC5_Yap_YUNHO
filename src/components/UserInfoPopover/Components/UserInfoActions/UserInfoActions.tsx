import { User } from "@/types"
import * as S from "./UserInfoActions.Styles"

interface UserInfoTopProps {
  user: User
}

const UserInfoTop = ({ user }: UserInfoTopProps) => {
  return (
    <S.UserInfoTopLayout>
      <S.UserInfoProfile $url={user.image} />
      <S.UserInfoActions>
        <S.UserInfoButtons>DM</S.UserInfoButtons>
        <S.UserInfoButtons>언 팔로우</S.UserInfoButtons>
      </S.UserInfoActions>
    </S.UserInfoTopLayout>
  )
}

export default UserInfoTop
