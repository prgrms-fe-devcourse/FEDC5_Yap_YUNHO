import * as S from "./UserPosts.Styles"
import UserPostFilter from "./components/UserPostFilter/UserPostFilter"
import UserPostList from "./components/UserPostList/UserPostList"

const UserPosts = () => {
  return (
    <S.UserPostsLayout>
      <UserPostFilter />
      <UserPostList />
    </S.UserPostsLayout>
  )
}

export default UserPosts
