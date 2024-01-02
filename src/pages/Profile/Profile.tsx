import UserPosts from "@/pages/Profile/components/UserPosts/UserPosts"
import UserProfile from "@/pages/Profile/components/UserProfile/UserProfile"
import { useParams } from "react-router-dom"
import Navbar from "@/components/Navbar/Navbar"

const Profile = () => {
  const { id } = useParams()
  return (
    <>
      <Navbar />
      <UserProfile userId={id} />
      <UserPosts />
    </>
  )
}

export default Profile
