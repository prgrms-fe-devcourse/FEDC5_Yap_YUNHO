import { useState } from "react"
import * as S from "./UserPosts.Styles"
import UserPostFilter from "./components/UserPostFilter/UserPostFilter"
import UserCreatePostList from "./components/UserPostList/UserCreatePostList"
import MyLikePostList from "./components/UserPostList/MyLikePostList"

const UserPosts = () => {
  const [isSelectedLikeFilter, setIsSelectedLikeFilter] = useState(false)

  return (
    <S.UserPostsLayout>
      <UserPostFilter
        handlePostList={(filter) => {
          setIsSelectedLikeFilter(filter)
        }}
      />
      {isSelectedLikeFilter ? <MyLikePostList /> : <UserCreatePostList />}
    </S.UserPostsLayout>
  )
}

export default UserPosts
