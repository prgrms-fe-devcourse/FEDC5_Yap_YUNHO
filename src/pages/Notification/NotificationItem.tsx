import MessageProfile from "../DirectMessage/components/MessageGroupList/MessageProfile"
import * as S from "./Notification.Styles"

interface NotificationItemProps {
  handleClick: () => void
}
const NotificationItem = ({ handleClick }: NotificationItemProps) => {
  return (
    <S.NotificationItemLayout onClick={handleClick}>
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg="https://png.pngtree.com/png-vector/20191115/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_1990469.jpg"
        />
        <S.NotificationItemInfo>
          <S.NotificationItemUserName>재영</S.NotificationItemUserName>
          <S.NotificationItemContent>
            재영님이 댓글을 달았습니다.
          </S.NotificationItemContent>
          <S.NotificationItemDate>1월 14일</S.NotificationItemDate>
        </S.NotificationItemInfo>
      </S.NotificationItemContainer>
    </S.NotificationItemLayout>
  )
}

export default NotificationItem
