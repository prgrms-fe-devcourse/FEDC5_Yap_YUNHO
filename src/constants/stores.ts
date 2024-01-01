import { User } from "@/types"

export const NAV_MENU_LIST = ["게시물 생성", "DM", "알림", "로그인"]

export const AUTH_USER_INITIAL_USER_DATA: User = {
  coverImage: "",
  image: "",
  role: "",
  emailVerified: false,
  banned: false,
  isOnline: false,
  posts: [],
  likes: [],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: [],
  _id: "",
  fullName: "",
  email: "",
  createdAt: "",
  updatedAt: "",
}

// Login 구현 이전까지 개발 단계에서 사용할 예정
export const DUMMY_USER_DATA: User = {
  coverImage: "",
  image:
    "https://res.cloudinary.com/dalxgxu2o/image/upload/v1703846109/default-User-Profile_yftcy6.jpg",
  role: "",
  emailVerified: false,
  banned: false,
  isOnline: false,
  posts: [],
  likes: [],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: [],
  _id: "thisIsDummyID1231421312",
  fullName: "잔액부족",
  email: "leey153@naver.com",
  createdAt: "2023-12-23T15:46:25.798Z",
  updatedAt: "2023-12-26T09:14:30.397Z",
}
