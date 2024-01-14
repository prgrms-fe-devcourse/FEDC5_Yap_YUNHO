import * as S from "./Notification.Styles"

const NotificationTitle = () => {
  return (
    <S.NotificationTitleLayout>
      <S.NotificationTitleContainer>
        <S.NotificationTitleList>알림 목록</S.NotificationTitleList>
        <S.NotificationTitleListNumber>4</S.NotificationTitleListNumber>
      </S.NotificationTitleContainer>
      <S.NotificationDeleteButton>알림 지우기</S.NotificationDeleteButton>
    </S.NotificationTitleLayout>
  )
}

export default NotificationTitle
