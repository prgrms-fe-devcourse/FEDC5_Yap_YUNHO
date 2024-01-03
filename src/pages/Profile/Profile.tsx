import UserPosts from "@/pages/Profile/components/UserPosts/UserPosts"
import UserProfile from "@/pages/Profile/components/UserProfile/UserProfile"
import { useParams } from "react-router-dom"
import Navbar from "@/components/Navbar/Navbar"
import useProfile from "./hooks/useProfile"

const Profile = () => {
  const { id } = useParams()
  const { isMyPage } = useProfile({ userId: id })

  return (
    <>
      <Navbar />
      <UserProfile isMyPage={isMyPage} />
      <UserPosts />
    </>
  )
}

export default Profile
