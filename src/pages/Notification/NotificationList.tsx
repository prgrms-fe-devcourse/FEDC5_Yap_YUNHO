import { useNavigate } from "react-router-dom"
import * as S from "./Notification.Styles"
import NotificationItem from "./NotificationItem"
import { Notification } from "@/types/index"

interface DUMMY_DATA_PROPS {
  DUMMY_DATA: Notification[]
}

const NotificationList = ({ DUMMY_DATA }: DUMMY_DATA_PROPS) => {
  const navigate = useNavigate()
  const handleClick = (NotificationType: string, NavigationId: string) => {
    navigate(`/${NotificationType}/${NavigationId}`)
  }
  return (
    <S.NotificationListLayout>
      <NotificationItem
        handleClick={handleClick}
        Notification={DUMMY_DATA[0]}
      />
      <NotificationItem
        handleClick={handleClick}
        Notification={DUMMY_DATA[1]}
      />
      <NotificationItem
        handleClick={handleClick}
        Notification={DUMMY_DATA[2]}
      />
      <NotificationItem
        handleClick={handleClick}
        Notification={DUMMY_DATA[3]}
      />
    </S.NotificationListLayout>
  )
}
export default NotificationList
