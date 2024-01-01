import UserAction from "./components/UserAction/UserAction"
import UserFollowInfo from "./components/UserFollowInfo"
import UserNickname from "./components/UserNickname"
import UserPostFilter from "./components/UserPostFilter/UserPostFilter"
import UserPostList from "./components/UserPostList"
import UserProfileImage from "./components/UserProfileImage"

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
