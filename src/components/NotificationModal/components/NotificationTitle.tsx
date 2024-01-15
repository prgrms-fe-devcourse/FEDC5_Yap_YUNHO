import * as S from "./Notification.Styles"
import { Notification } from "../../../types/index"

interface NotificationTitleProps {
  NotificationListData: Notification[]
}

const NotificationTitle = ({
  NotificationListData,
}: NotificationTitleProps) => {
  const NotificationLength = NotificationListData?.filter(
    (notification: Notification) => {
      return !notification.seen
    },
  ).length

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
