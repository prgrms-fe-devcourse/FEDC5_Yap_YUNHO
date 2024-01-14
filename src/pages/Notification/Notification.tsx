import * as S from "./Notification.Styles"
import NotificationTitle from "./NotificationTitle"
import NotificationList from "./NotificationList"

const Notification = () => {
  return (
    <S.NotificationLayout>
      <NotificationTitle />
      <NotificationList />
    </S.NotificationLayout>
  )
}

export default Notification

// {
//   "seen": Boolean,
//   "_id": String,
//   "author": User,
//   "user": User | String,
//   "post": Nullable<String>, // 포스트 id
//   "follow": Optional<String>, // 사용자 id
//   "comment": Optional<Comment>,
//   "message": Optional<String>, // 메시지 id
//   "createdAt": String,
//   "updatedAt": String
// }
