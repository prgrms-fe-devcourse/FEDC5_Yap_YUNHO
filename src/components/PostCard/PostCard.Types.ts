export interface PostCardProps {
  textPercent?: "60%" | "80%" | "100%"
  isBlock?: boolean
}

export interface PostCardUserProfileProps {
  imgUrl: string
}

export interface PostCardThumbnailProps {
  imgUrl: string
}

export interface PostCardContentProps {
  content: string
  textPercent?: string
}
