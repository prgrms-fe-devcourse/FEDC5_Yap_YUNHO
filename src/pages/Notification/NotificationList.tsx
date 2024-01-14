import * as S from "./Notification.Styles"
import NotificationItem from "./NotificationItem"
import { Notification } from "@/types/index"

interface DUMMY_DATA_PROPS {
  DUMMY_DATA: Notification[]
}

const NotificationList = ({ DUMMY_DATA }: DUMMY_DATA_PROPS) => {
  console.log(DUMMY_DATA[0])
  const handleClick = () => {
    console.log("버튼 테스트")
  }
  return (
    <S.NotificationListLayout>
      <NotificationItem
        handleClick={handleClick}
        Notification={DUMMY_DATA[0]}
      />
    </S.NotificationListLayout>
  )
}
export default NotificationList
