import UserPostFilter from "./UserPostFilter/UserPostFilter"
import * as S from "./UserPosts.Styles"

const UserPosts = () => {
  return (
    <S.UserPostsLayout>
      <UserPostFilter />
    </S.UserPostsLayout>
  )
}

export default UserPosts
