import * as S from "./Notification.Styles"
import NotificationTitle from "./NotificationTitle"
import NotificationList from "./NotificationList"
import DUMMY_DATA from "./constants/DUMMY_DATA"

const Notification = () => {
  return (
    <S.NotificationLayout>
      <NotificationTitle DUMMY_DATA={DUMMY_DATA} />
      <NotificationList DUMMY_DATA={DUMMY_DATA} />
    </S.NotificationLayout>
  )
}

export default Notification
