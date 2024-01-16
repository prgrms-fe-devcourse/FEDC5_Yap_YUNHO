import { useState } from "react"
import * as S from "./UserPosts.Styles"
import UserPostFilter from "./components/UserPostFilter/UserPostFilter"
import UserCreatePostList from "./components/UserPostList/UserCreatePostList"
import MyLikePostList from "./components/UserPostList/MyLikePostList"
import useCreatePostList from "./hooks/useCreatePostList"

const UserPosts = () => {
  const [isSelectedLikeFilter, setIsSelectedLikeFilter] = useState(false)
  const { isLoading, createPostInfoList } = useCreatePostList()

  if (isLoading || !createPostInfoList) {
    return
  }
  return (
    <S.UserPostsLayout>
      <UserPostFilter
        handlePostList={(filter) => {
          setIsSelectedLikeFilter(filter)
        }}
      />

      {isSelectedLikeFilter ? (
        <MyLikePostList />
      ) : (
        <UserCreatePostList
          createPostInfoList={createPostInfoList}
          isLoading={isLoading}
        />
      )}
    </S.UserPostsLayout>
  )
}

export default UserPosts
