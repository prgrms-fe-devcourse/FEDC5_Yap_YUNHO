import * as S from "./NotificationTitle.Styles"
import { Notification } from "../../../../types/index"
import useSeenNotification from "../../hooks/useSeenNotification"

interface NotificationTitleProps {
  NotificationListData: Notification[]
}

const NotificationTitle = ({
  NotificationListData,
}: NotificationTitleProps) => {
  const { seenNotification } = useSeenNotification()

  const handleSeenNotification = () => {
    if (NotificationListData.length > 0) {
      seenNotification.mutate()
    }
  }

  return (
    <S.NotificationTitleLayout>
      <S.NotificationTitleContainer>
        <S.NotificationTitleList>{"알림 목록"}</S.NotificationTitleList>
        <S.NotificationTitleListNumber>
          {NotificationListData.length}
        </S.NotificationTitleListNumber>
      </S.NotificationTitleContainer>
      <S.NotificationDeleteButton onClick={handleSeenNotification}>
        {"알림 전체 지우기"}
      </S.NotificationDeleteButton>
    </S.NotificationTitleLayout>
  )
}

export default NotificationTitle
