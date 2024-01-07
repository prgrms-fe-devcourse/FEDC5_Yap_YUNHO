import * as S from "./UserActions.Styles"

interface UserActionButtonProps {
  text: string
  $width?: number
}

const UserActionButton = ({ text, $width }: UserActionButtonProps) => {
  return <S.UserActionButton $width={$width}>{text}</S.UserActionButton>
}

export default UserActionButton
