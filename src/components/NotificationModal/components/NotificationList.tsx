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
  console.log(NotificationListData)
  const navigate = useNavigate()
  const handleClick = (NOTIFI_NAVIGATION: string) => {
    navigate(`/${NOTIFI_NAVIGATION}`)
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
