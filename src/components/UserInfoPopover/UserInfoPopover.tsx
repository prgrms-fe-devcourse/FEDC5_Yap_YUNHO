import Popover from "../Popover/Popover"

interface UserInfoDropDownProps {
  userId: string
  children: React.ReactNode
  isPostCard?: boolean
}

const UserInfoPopover = ({
  userId,
  isPostCard,
  children,
}: UserInfoDropDownProps) => {
  console.log(userId)

  const inner = <button>훈오fsdsfhsdjkfh</button>

  return (
    <Popover
      innerComponent={inner}
      isPostCard={isPostCard}
    >
      {children}
    </Popover>
  )
}

export default UserInfoPopover
