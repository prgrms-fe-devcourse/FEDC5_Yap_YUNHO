import UserPosts from "@/pages/Profile/components/UserPosts/UserPosts"
import UserProfile from "@/pages/Profile/components/UserProfile/UserProfile"
import * as S from "./Profile.Styles"

const Profile = () => {
  return (
    <S.UserProfileLayout>
      <UserProfile />
      <UserPosts />
    </S.UserProfileLayout>
  )
}

export default Profile
