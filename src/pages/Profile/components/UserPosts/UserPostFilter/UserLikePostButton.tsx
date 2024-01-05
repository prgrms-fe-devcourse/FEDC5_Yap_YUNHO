import * as S from "./UserPostFilter.Styles"

interface UserLikePostButtonProps {
  onClick: () => void
  $isSelected: boolean
}

const UserLikePostButton = ({
  onClick,
  $isSelected,
}: UserLikePostButtonProps) => {
  return (
    <S.UserLikePostsButton
      $isSelected={$isSelected}
      onClick={onClick}
    >
      좋아요한 게시글
    </S.UserLikePostsButton>
  )
}

export default UserLikePostButton
