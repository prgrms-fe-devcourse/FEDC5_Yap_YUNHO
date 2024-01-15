import * as S from "../UserProfile.Styles"
import { useEffect, useState } from "react"

interface UserProfileImageProp {
  image?: string
}

const UserProfileImage = ({ image }: UserProfileImageProp) => {
  const [profileImage, setProfileImage] = useState<string | undefined>("")

  useEffect(() => {
    setProfileImage(image)
  }, [image])

  return (
    <S.UserProfileImageContainer
      src={profileImage}
    ></S.UserProfileImageContainer>
  )
}

export default UserProfileImage
