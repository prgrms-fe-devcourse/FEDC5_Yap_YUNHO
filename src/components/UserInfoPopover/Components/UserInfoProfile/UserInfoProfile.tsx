import { User } from "@/types"
import * as S from "./UserInfoProfile.Styles"
import { useNavigate } from "react-router-dom"
import standardImage from "@/assets/standard.jpeg"
interface UserInfoProfileProps {
  user: User
}

const UserInfoProfile = ({ user }: UserInfoProfileProps) => {
  const navigate = useNavigate()

  const imgUrl = user.image ? user.image : standardImage
  return (
    <S.UserInfoProfileLayout>
      <S.UserInfoProfile
        $url={imgUrl}
        onClick={() => navigate(`/profile/${user._id}`)}
      />
      <S.UserInfoNickNameText>{user.fullName}</S.UserInfoNickNameText>
    </S.UserInfoProfileLayout>
  )
}

export default UserInfoProfile
