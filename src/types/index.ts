export interface User {
  coverImage: string
  image: string // 프로필 이미지
  role: string
  emailVerified: boolean
  banned: boolean
  isOnline: boolean
  posts: Post[]
  likes: Like[]
  comments: string[]
  followers: Follow[]
  following: Following[]
  notifications: Notification[]
  messages: Message[]
  _id: string
  fullName: string
  email: string
  createdAt: string
  updatedAt: string
}

export interface Channel {
  authRequired: boolean
  posts: string[]
  _id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

// API 에서 값을 전달받은 상태
export interface JSONPost {
  likes: Like[]
  comments: Comment[]
  _id: string
  image?: null
  imagePublicId?: string
  title: string
  channel: Channel
  author: User
  createdAt: string
  updatedAt: string
}

// 전달 받은 데이터를 JSON 으로 변환한 객체 상태
export interface Post {
  likes: Like[]
  comments: Comment[]
  _id: string
  image?: null
  imagePublicId?: string
  title: PostContent
  channel: Channel
  author: User
  createdAt: string
  updatedAt: string
}
export interface PostContent {
  mediaUrl: string
  thumbnail: string
  content: string
}

export interface Like {
  _id: string
  user: string // 사용자 id
  post: string // 포스트 id
  createdAt: string
  updatedAt: string
}

export interface Notification {
  seen: boolean
  _id: string
  author: User
  user: User | string
  post: string | null // 포스트 id
  follow?: string // 사용자 id
  comment?: string
  message?: string // 메시지 id
  createdAt: string
  updatedAt: string
}

export interface Follow {
  _id: string
  user: string // 사용자 id
  follower: string // 사용자 id
  createdAt: string
  updatedAt: string
}
export interface Following {
  _id: string
  user: string
  follower: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Conversation {
  _id: string[]
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
}

export interface Message {
  _id: string
  message: string
  sender: User
  receiver: User
  seen: boolean
  createdAt: string
  updatedAt: string
}
