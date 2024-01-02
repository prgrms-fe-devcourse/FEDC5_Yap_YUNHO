import UserFollowButton from "./UserFollowButton"
import UserUpdateInfoButton from "./UserUpdateInfoButton"
import UserSendDMButton from "./UserSendDMButton"
import * as S from "./UserActions.Styles"

interface UserActionsProps {
  isMyPage: boolean
}

const UserActions = ({ isMyPage }: UserActionsProps) => {
  return (
    <S.UserActionSection>
      {isMyPage ? (
        <UserUpdateInfoButton />
      ) : (
        <>
          <UserFollowButton />
          <UserSendDMButton />
        </>
      )}
    </S.UserActionSection>
  )
}

export default UserActions
