import MessageProfile from "../../../pages/DirectMessage/components/MessageGroupList/MessageProfile"
import * as S from "./Notification.Styles"
import { Notification } from "../../../types/index"

interface NotificationItemProps {
  handleClick: (NotificationType: string, NavigationId: string) => void
  Notification: Notification
}
const NotificationItem = ({
  handleClick,
  Notification: notificationItem,
}: NotificationItemProps) => {
  const { _id, createdAt, author, user, message, like, comment, follow } =
    notificationItem
  if (typeof user === "string") {
    return
  }

  const { _id: othersUserId } = author // 메시지
  const { posts: postId } = user

  const NavigationId = comment || like ? postId[0] : othersUserId
  // 여기 코드 이상함
  if (typeof NavigationId !== "string") {
    return
  }

  const NotificationType =
    comment || like
      ? "postdetail"
      : follow
        ? "profile"
        : message
          ? "directmessage"
          : "undefined"

  return (
    <S.NotificationItemLayout
      onClick={() => {
        handleClick(NotificationType, NavigationId)
      }}
    >
      <S.NotificationItemContainer>
        <MessageProfile
          isOnline={false}
          profileImg={author.image}
        />
        <S.NotificationItemInfo>
          <S.NotificationItemUserName>
            {author.fullName}
          </S.NotificationItemUserName>
          <S.NotificationItemContent>
            {author.fullName}님이 댓글을 달았습니다.
          </S.NotificationItemContent>
          <S.NotificationItemDate>
            {createdAt.slice(0, 10)}
          </S.NotificationItemDate>
        </S.NotificationItemInfo>
      </S.NotificationItemContainer>
    </S.NotificationItemLayout>
  )
}

export default NotificationItem

// 댓글,좋아요 -> 포스트로(포스트 id 필요)
// 댓글 : 포스트로(포스트 id 필요)
// 팔로우 -> 팔로우한 상대방 정보 페이지로(상대방 id 필요)
// 메시지 -> 상대방과의 메시지 페이지로(상대방 id 필요)

// 댓글 : auth(댓글단사람) -> user(포스트 주인)
