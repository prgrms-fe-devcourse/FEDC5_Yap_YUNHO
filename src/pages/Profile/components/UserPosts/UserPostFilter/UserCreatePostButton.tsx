import * as S from "./UserPostFilter.Styles"

interface UserPostFilterButtonProps {
  onClick: () => void
  $isSelected: boolean
  title: string
}

const UserPostFilterButton = ({
  onClick,
  $isSelected,
  title,
}: UserPostFilterButtonProps) => {
  return (
    <S.UserPostFilterButton
      $isSelected={$isSelected}
      onClick={onClick}
    >
      {title}
    </S.UserPostFilterButton>
  )
}

export default UserPostFilterButton
