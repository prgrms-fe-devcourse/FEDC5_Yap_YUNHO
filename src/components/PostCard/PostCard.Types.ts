export interface PostCardProps {
  textPercent?: "60%" | "80%" | "100%"
  isBlock?: boolean
  authUserProfile?: string
  thumbnail: string
  content: string
  mediaUrl: string
  isNoneProfile?: boolean
  onNavigatePostDetail?: () => void
}

export interface PostCardUserProfileProps {
  imgUrl: string
  isNoneProfile?: boolean
  onNavigatePostDetail?: () => void
}

export interface PostCardThumbnailProps {
  imgUrl: string
  onNavigatePostDetail?: () => void
}

export interface PostCardContentProps {
  content: string
  textPercent?: "60%" | "80%" | "100%"
}
