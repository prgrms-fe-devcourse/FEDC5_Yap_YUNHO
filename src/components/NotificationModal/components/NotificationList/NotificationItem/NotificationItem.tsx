import MessageProfile from "@/pages/DirectMessage/components/MessageGroupList/MessageGroupUserlist/MessageProfile/MessageProfile"
import * as S from "./NotificationItem.Styles"
import { Notification } from "@/types"
import getNotificationOption from "../../../utils/getNotificationOption"
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
  Notification: notification,
}: NotificationItemProps) => {
  const { createdAt, author } = notification
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { NOTIFI_TEXT, NOTIFI_NAVIGATION } = getNotificationOption(
    notification,
    pathname,
  )

  register("ko", kolocale)
  const convertedData = format(createdAt, "ko")

  const handleClickProfileImage = () => {
    onClose()
    navigate(`/profile/${author._id}`)
  }

  const handleClickNotificationItem = () => {
    handleClick(NOTIFI_NAVIGATION)
  }

  return (
    <S.NotificationItemLayout>
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg={author.image}
          onClick={handleClickProfileImage}
        />
        <S.NotificationItemInfo onClick={handleClickNotificationItem}>
          <S.NotificationItemUserName>
            {author.fullName}
          </S.NotificationItemUserName>
          <S.NotificationItemContent>
            {author.fullName}님이 {NOTIFI_TEXT}
          </S.NotificationItemContent>
          <S.NotificationItemDate>{convertedData}</S.NotificationItemDate>
        </S.NotificationItemInfo>
      </S.NotificationItemContainer>
    </S.NotificationItemLayout>
  )
}

export default NotificationItem
