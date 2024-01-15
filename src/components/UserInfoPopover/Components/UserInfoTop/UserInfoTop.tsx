import { User } from "@/types"
import * as S from "./UserInfoTop.Styles"

interface UserInfoTopProps {
  user: User
}

const UserInfoTop = ({ user }: UserInfoTopProps) => {
  return (
    <S.UserInfoTopLayout>
      <S.UserInfoProfile $url={user.image} />
    </S.UserInfoTopLayout>
  )
}

export default UserInfoTop
