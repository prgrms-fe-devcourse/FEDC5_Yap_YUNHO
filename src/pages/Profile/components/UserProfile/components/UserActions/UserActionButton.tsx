import * as S from "./UserActions.Styles"

interface UserActionButtonProps {
  text: string
  $width?: number
  onClick: () => void
}

const UserActionButton = ({ text, $width, onClick }: UserActionButtonProps) => {
  return (
    <S.UserActionButton
      $width={$width}
      onClick={onClick}
    >
      {text}
    </S.UserActionButton>
  )
}

export default UserActionButton
