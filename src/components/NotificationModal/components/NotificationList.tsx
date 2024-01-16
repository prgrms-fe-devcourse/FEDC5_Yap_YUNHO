import { useLocation, useNavigate, useParams } from "react-router-dom"
import * as S from "./Notification.Styles"
import NotificationItem from "./NotificationItem"
import { Notification } from "@/types/index"

interface NotificationListDataProps {
  NotificationListData: Notification[]
  onClose: () => void
}

const NotificationList = ({
  NotificationListData,
  onClose,
}: NotificationListDataProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const handleClick = (NOTIFI_NAVIGATION: string) => {
    navigate(`${pathname}/${NOTIFI_NAVIGATION}`)
    onClose()
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
