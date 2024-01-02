import UserPosts from "@/pages/Profile/components/UserPosts/UserPosts"
import UserProfile from "@/pages/Profile/components/UserProfile/UserProfile"
import { useParams } from "react-router-dom"

const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <UserProfile userId={id} />
      <UserPosts />
    </>
  )
}

export default Profile
