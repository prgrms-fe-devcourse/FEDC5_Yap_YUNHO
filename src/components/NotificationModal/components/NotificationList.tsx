import { useNavigate } from "react-router-dom"
import * as S from "./Notification.Styles"
import NotificationItem from "./NotificationItem"
import { Notification } from "@/types/index"

interface NotificationListDataProps {
  NotificationListData: Notification[]
}

const NotificationList = ({
  NotificationListData,
}: NotificationListDataProps) => {
  const navigate = useNavigate()
  const handleClick = (NotificationType: string, NavigationId: string) => {
    navigate(`/${NotificationType}/${NavigationId}`)
  }
  return (
    <S.NotificationListLayout>
      {NotificationListData.map((item) => (
        <NotificationItem
          handleClick={handleClick}
          Notification={item}
          key={item._id}
        />
      ))}
    </S.NotificationListLayout>
  )
}
export default NotificationList
