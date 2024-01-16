import { User } from "@/types"

export type OnNavigatePostDetail = (postId: string) => void

export interface PostCardProps {
  thumbnail: string
  content: string
  mediaUrl: string
  postId: string
  isBlock?: boolean
  author: User
  hasProfile?: boolean
  textPercent?: "60%" | "80%" | "100%"
  onNavigatePostDetail?: OnNavigatePostDetail
}

export interface PostCardUserProfileProps {
  author: User
  postId: string
  hasProfile?: boolean
  onNavigatePostDetail?: OnNavigatePostDetail
}

export interface PostCardThumbnailProps {
  imgUrl: string
  postId: string
  onNavigatePostDetail?: OnNavigatePostDetail
}

export interface PostCardContentProps {
  content: string
  textPercent?: "60%" | "80%" | "100%"
}
