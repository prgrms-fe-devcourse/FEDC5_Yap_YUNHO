import MessageProfile from "../../../pages/DirectMessage/components/MessageGroupList/MessageProfile"
import * as S from "./Notification.Styles"
import { Notification } from "../../../types/index"
import getNotificationOption from "../utils/getNotificationOption"
import { useLocation } from "react-router-dom"

interface NotificationItemProps {
  handleClick: (NavigationId: string) => void
  Notification: Notification
}
const NotificationItem = ({
  handleClick,
  Notification: notificationItem,
}: NotificationItemProps) => {
  const { createdAt, author } = notificationItem
  const { pathname } = useLocation()
  const { NOTIFI_LANGUAGE, NOTIFI_NAVIGATION } = getNotificationOption(
    notificationItem,
    pathname,
  )
  console.log(NOTIFI_NAVIGATION)

  return (
    <S.NotificationItemLayout
      onClick={() => {
        handleClick(NOTIFI_NAVIGATION)
      }}
    >
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg={author.image}
        />
        <S.NotificationItemInfo>
          <S.NotificationItemUserName>
            {author.fullName}
          </S.NotificationItemUserName>
          <S.NotificationItemContent>
            {author.fullName}님이 {NOTIFI_LANGUAGE}
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
