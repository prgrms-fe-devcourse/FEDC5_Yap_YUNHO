import * as S from "./UserInfoPopover.Styles"
import Popover from "../Popover/Popover"

interface UserInfoDropDownProps {
  userId: string
  children: React.ReactNode
  isPostCard?: boolean
  isLeft?: boolean
}

const UserInfoPopover = ({
  isPostCard,
  children,
  isLeft,
}: UserInfoDropDownProps) => {
  const inner = (
    <S.UserInfoBackground>
      <S.UserInfoLayout>
        <div>fdsfs</div>
      </S.UserInfoLayout>
    </S.UserInfoBackground>
  )

  return (
    <Popover
      innerComponent={inner}
      isPostCard={isPostCard}
      isLeft={isLeft}
    >
      {children}
    </Popover>
  )
}

export default UserInfoPopover
