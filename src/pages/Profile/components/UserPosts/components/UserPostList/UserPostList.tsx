import * as S from "./UserPostList.Styles"
import UserPostListItem from "./UserPostListItem"

const UserPostList = () => {
  const tempArr = Array.from({ length: 10 }, () => (
    <UserPostListItem></UserPostListItem>
  ))

  return <S.UserPostListContainer>{...tempArr}</S.UserPostListContainer>
}

export default UserPostList
