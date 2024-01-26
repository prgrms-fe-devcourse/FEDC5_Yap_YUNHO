import { useNavigate } from "react-router-dom"
import * as S from "./NotificationList.Styles"
import { Notification } from "@/types/index"
import NotificationItem from "./NotificationItem/NotificationItem"

interface NotificationListProps {
  NotificationListData: Notification[]
  onClose: () => void
}

const NotificationList = ({
  NotificationListData,
  onClose,
}: NotificationListProps) => {
  const navigate = useNavigate()
  const handleClick = (NOTIFI_NAVIGATION: string) => {
    if (NOTIFI_NAVIGATION) {
      navigate(NOTIFI_NAVIGATION)
      onClose()
    }
  }
  return (
    <S.NotificationListLayout>
      {NotificationListData.map((notification) => (
        <NotificationItem
          onClose={onClose}
          handleClick={handleClick}
          Notification={notification}
          key={notification._id}
        />
      ))}
    </S.NotificationListLayout>
  )
}
export default NotificationList
