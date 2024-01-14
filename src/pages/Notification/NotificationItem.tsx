import MessageProfile from "../DirectMessage/components/MessageGroupList/MessageProfile"
import * as S from "./Notification.Styles"
import { Notification, User } from "./../../types/index"

interface NotificationItemProps {
  handleClick: () => void
  Notification: Notification
}
const NotificationItem = ({
  handleClick,
  Notification: notificationItem,
}: NotificationItemProps) => {
  const { _id, createdAt, author, user, message } = notificationItem

  if (typeof user === "string") {
    return
  }

  // 4가지 타입에 따라 걸러야함

  return (
    <S.NotificationItemLayout onClick={handleClick}>
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg={author.image}
        />
        <S.NotificationItemInfo>
          <S.NotificationItemUserName>
            {user.fullName}
          </S.NotificationItemUserName>
          <S.NotificationItemContent>
            {user.fullName}님이 댓글을 달았습니다.
          </S.NotificationItemContent>
          <S.NotificationItemDate>
            {createdAt.slice(0, 10)}
          </S.NotificationItemDate>
        </S.NotificationItemInfo>
      </S.NotificationItemContainer>
    </S.NotificationItemLayout>
  )
}

export default NotificationItem
