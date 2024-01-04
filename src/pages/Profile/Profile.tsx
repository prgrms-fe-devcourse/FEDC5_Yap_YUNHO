import UserPosts from "@/pages/Profile/components/UserPosts/UserPosts"
import UserProfile from "@/pages/Profile/components/UserProfile/UserProfile"
import { useParams } from "react-router-dom"
import Navbar from "@/components/Navbar/Navbar"
import useProfile from "./hooks/useProfile"
import * as S from "./Profile.Styles"

const Profile = () => {
  const { id } = useParams()
  const { isMyPage } = useProfile({ userId: id })

  return (
    <S.UserProfileLayout>
      <Navbar />
      <UserProfile isMyPage={isMyPage} />
      <UserPosts />
    </S.UserProfileLayout>
  )
}

export default Profile
