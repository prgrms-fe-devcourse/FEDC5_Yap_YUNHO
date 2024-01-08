import * as S from "./UserPosts.Styles"
import UserPostFilter from "./components/UserPostFilter/UserPostFilter"

const UserPosts = () => {
  return (
    <S.UserPostsLayout>
      <UserPostFilter />
    </S.UserPostsLayout>
  )
}

export default UserPosts
