import * as S from "./Notification.Styles"
import NotificationTitle from "./NotificationTitle"
import NotificationList from "./NotificationList"
const DUMMY_DATA = [
  {
    seen: false,
    _id: "1",
    createdAt: "2024-01-12T16:49:28.581Z",
    updatedAt: "2024-01-12T16:49:28.581Z",
    author: {
      coverImage: String, // 커버 이미지(사용되지 않음)
      image: String,
      role: String,
      emailVerified: Boolean, // 사용되지 않음
      banned: Boolean, // 사용되지 않음
      isOnline: Boolean,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: [],
      _id: "123124214",
      fullName: "이재영",
      email: "leey153@naver.com",
      createdAt: "2021-10-15T20:48:19.816Z",
      updatedAt: "2021-10-15T20:48:19.816Z",
    },
    user: {
      coverImage: String, // 커버 이미지(사용되지 않음)
      image: String,
      role: String,
      emailVerified: Boolean, // 사용되지 않음
      banned: Boolean, // 사용되지 않음
      isOnline: Boolean,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: [],
      _id: "123124214",
      fullName: "이재영",
      email: "leey153@naver.com",
      createdAt: "2021-10-15T20:48:19.816Z",
      updatedAt: "2021-10-15T20:48:19.816Z",
    },
    message: "", // 메시지 아이디
    // post: "",
    // comment: "",
    // follow: "",
  },
]
const Notification = () => {
  return (
    <S.NotificationLayout>
      <NotificationTitle DUMMY_DATA={DUMMY_DATA} />
      <NotificationList DUMMY_DATA={DUMMY_DATA} />
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
