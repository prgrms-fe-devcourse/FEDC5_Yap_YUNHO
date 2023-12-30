import UserAction from "./Components/UserAction/UserAction"
import UserFollowInfo from "./Components/UserFollowInfo"
import UserNickname from "./Components/UserNickname"
import UserPostFilter from "./Components/UserPostFilter/UserPostFilter"
import UserPostList from "./Components/UserPostList"
import UserProfileImage from "./Components/UserProfileImage"

const Profile = () => {
  return (
    <div>
      <UserProfileImage />
      <UserNickname />
      <UserAction />
      <UserFollowInfo />
      <UserPostFilter />
      <UserPostList />
    </div>
  )
}

export default Profile
