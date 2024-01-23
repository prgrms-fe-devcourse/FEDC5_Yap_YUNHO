import MessageProfile from "../../../pages/DirectMessage/components/MessageGroupList/MessageProfile"
import * as S from "./Notification.Styles"
import { Notification } from "../../../types/index"
import getNotificationOption from "../utils/getNotificationOption"
import { useLocation, useNavigate } from "react-router-dom"
import { format, register } from "timeago.js"
import kolocale from "timeago.js/lib/lang/ko"

interface NotificationItemProps {
  handleClick: (NavigationId: string) => void
  onClose: () => void
  Notification: Notification
}
const NotificationItem = ({
  handleClick,
  onClose,
  Notification: notificationItem,
}: NotificationItemProps) => {
  const { createdAt, author } = notificationItem
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { NOTIFI_LANGUAGE, NOTIFI_NAVIGATION } = getNotificationOption(
    notificationItem,
    pathname,
  )
  register("ko", kolocale)
  const convertedData = format(createdAt, "ko")

  const handleClickProfileImage = () => {
    onClose()
    navigate(`/profile/${author._id}`)
  }

  return (
    <S.NotificationItemLayout>
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg={author.image}
          onClick={handleClickProfileImage}
        />
        <S.NotificationItemInfo
          onClick={() => {
            handleClick(NOTIFI_NAVIGATION)
          }}
        >
          <S.NotificationItemUserName>
            {author.fullName}
          </S.NotificationItemUserName>
          <S.NotificationItemContent>
            {author.fullName}님이 {NOTIFI_LANGUAGE}
          </S.NotificationItemContent>
          <S.NotificationItemDate>{convertedData}</S.NotificationItemDate>
        </S.NotificationItemInfo>
      </S.NotificationItemContainer>
    </S.NotificationItemLayout>
  )
}

export default NotificationItem
