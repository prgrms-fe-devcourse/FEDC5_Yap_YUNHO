import { User } from "@/types"
import * as S from "./UserInfoProfile.Styles"
import { useNavigate } from "react-router-dom"

interface UserInfoProfileProps {
  user: User
}

const UserInfoProfile = ({ user }: UserInfoProfileProps) => {
  const navigate = useNavigate()
  return (
    <S.UserInfoProfileLayout>
      <S.UserInfoProfile
        $url={user.image}
        onClick={() => navigate(`/profile/${user._id}`)}
      />
      <S.UserInfoNickNameText>{user.fullName}</S.UserInfoNickNameText>
    </S.UserInfoProfileLayout>
  )
}

export default UserInfoProfile
