import * as S from "./UserPostFilter.Styles"

interface UserCreatePostButtonProps {
  onClick: () => void
  $isSelected: boolean
  $isMyPage: boolean
}

const UserCreatePostButton = ({
  onClick,
  $isSelected,
  $isMyPage,
}: UserCreatePostButtonProps) => {
  return (
    <S.UserCreatePostsButton
      $isSelected={$isSelected}
      onClick={onClick}
      $isMyPage={$isMyPage}
    >
      생성한 게시글
    </S.UserCreatePostsButton>
  )
}

export default UserCreatePostButton
