import * as S from "./Notification.Styles"
import { Notification } from "./../../types/index"

interface NotificationTitleProps {
  DUMMY_DATA: Notification[]
}

const NotificationTitle = ({ DUMMY_DATA }: NotificationTitleProps) => {
  const { seen, _id, createdAt, author, user, message } = DUMMY_DATA
  if (!DUMMY_DATA) {
    return
  }
  const NotificationLength = DUMMY_DATA.filter((notification: Notification) => {
    return !notification.seen
  }).length

  return (
    <S.NotificationTitleLayout>
      <S.NotificationTitleContainer>
        <S.NotificationTitleList>알림 목록</S.NotificationTitleList>
        <S.NotificationTitleListNumber>
          {NotificationLength}
        </S.NotificationTitleListNumber>
      </S.NotificationTitleContainer>
      <S.NotificationDeleteButton>알림 지우기</S.NotificationDeleteButton>
    </S.NotificationTitleLayout>
  )
}

export default NotificationTitle
