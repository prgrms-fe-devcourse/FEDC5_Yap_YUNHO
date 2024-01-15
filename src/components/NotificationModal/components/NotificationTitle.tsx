import * as S from "./Notification.Styles"
import { Notification } from "../../../types/index"
import useSeenNotification from "../hooks/useSeenNotification"

interface NotificationTitleProps {
  NotificationListData: Notification[]
}

const NotificationTitle = ({
  NotificationListData,
}: NotificationTitleProps) => {
  const { seenNotification } = useSeenNotification()

  return (
    <S.NotificationTitleLayout>
      <S.NotificationTitleContainer>
        <S.NotificationTitleList>알림 목록</S.NotificationTitleList>
        <S.NotificationTitleListNumber>
          {NotificationListData.length}
        </S.NotificationTitleListNumber>
      </S.NotificationTitleContainer>
      <S.NotificationDeleteButton
        onClick={() => {
          if (NotificationListData.length > 0) {
            seenNotification.mutate()
          }
        }}
      >
        알림 지우기
      </S.NotificationDeleteButton>
    </S.NotificationTitleLayout>
  )
}

export default NotificationTitle
