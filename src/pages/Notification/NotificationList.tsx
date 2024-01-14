import * as S from "./Notification.Styles"
import NotificationItem from "./NotificationItem"

const NotificationList = () => {
  const handleClick = () => {
    console.log("버튼 테스트")
  }
  return (
    <S.NotificationListLayout>
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
      <NotificationItem handleClick={handleClick} />
    </S.NotificationListLayout>
  )
}
export default NotificationList
