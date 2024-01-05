import * as S from "./UserPostFilter.Styles"

interface UserCreatePostButtonProps {
  onClick: () => void
  $isSelected: boolean
}

const UserCreatePostButton = ({
  onClick,
  $isSelected,
}: UserCreatePostButtonProps) => {
  return (
    <S.UserCreatePostsButton
      $isSelected={$isSelected}
      onClick={onClick}
    >
      생성한 게시글
    </S.UserCreatePostsButton>
  )
}

export default UserCreatePostButton
