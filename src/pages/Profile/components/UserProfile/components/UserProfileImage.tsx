import * as S from "../UserProfile.Styles"
import defaultImage from "@/assets/standard.jpeg"

interface UserProfileImageProp {
  image?: string
}

const UserProfileImage = ({ image }: UserProfileImageProp) => {
  const profileImage = image ? image : defaultImage

  return (
    <S.UserProfileImageContainer
      src={profileImage}
    ></S.UserProfileImageContainer>
  )
}

export default UserProfileImage
