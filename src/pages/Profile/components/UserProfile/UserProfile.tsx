import * as S from "./UserProfile.Styles"
import UserActions from "./components/UserActions/UserActions"
import UserFollowInfo from "./components/UserFollowInfo/UserFollowInfo"
import UserNickname from "./components/UserNickname"
import UserProfileImage from "./components/UserProfileImage"
import { AUTH_API } from "@/apis/Api"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

const USER_PROFILE_QUERY_KEY = "USER_PROFILE_QUERY_KEY"

const UserProfile = () => {
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: [USER_PROFILE_QUERY_KEY, id],
    queryFn: () => AUTH_API.get(`/users/${id}`).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })

  if (isLoading || isError) {
    return
  }

  return (
    <S.UserProfileLayout>
      <UserProfileImage image={data.image} />
      <UserNickname nickName={data.fullName} />
      <UserActions />
      <UserFollowInfo
        followingCount={data.following.length}
        followerCount={data.followers.length}
      />
    </S.UserProfileLayout>
  )
}

export default UserProfile
