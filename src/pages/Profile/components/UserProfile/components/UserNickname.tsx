import * as S from "../UserProfile.Styles"

interface UserNicknameProps {
  nickName?: string
}

const UserNickname = ({ nickName }: UserNicknameProps) => {
  return <S.UserNickNameContainer>{nickName}</S.UserNickNameContainer>
}

export default UserNickname
