import { useEffect, useState } from "react"
import * as S from "./UserProfile.Styles"
import UserActions from "./components/UserActions/UserActions"
import UserFollowInfo from "./components/UserFollowInfo/UserFollowInfo"
import UserNickname from "./components/UserNickname"
import UserProfileImage from "./components/UserProfileImage"
import { AUTH_API } from "@/apis/Api"
import { useParams } from "react-router-dom"
import { User } from "@/types"

const UserProfile = () => {
  const { id } = useParams()
  const [userInfo, setUserInfo] = useState<User>()
  const [followerCount, setFollowerCount] = useState(0)

  useEffect(() => {
    AUTH_API.get(`/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setUserInfo(data)
        setFollowerCount(data.followers.length)
      })
  }, [id, setUserInfo])

  return (
    <S.UserProfileLayout>
      <UserProfileImage image={userInfo?.image} />
      <UserNickname nickName={userInfo?.fullName} />
      <UserActions
        onFollowButtonClick={() => setFollowerCount((state) => state + 1)}
        onUnFollowButtonClick={() => setFollowerCount((state) => state - 1)}
      />
      <UserFollowInfo
        followingCount={userInfo?.following.length}
        followerCount={followerCount}
      />
    </S.UserProfileLayout>
  )
}

export default UserProfile
