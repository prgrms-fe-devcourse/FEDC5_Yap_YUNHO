export interface PostCardProps {
  textPercentage?: "60%" | "80%" | "100%"
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
  textPercentage?: string
}
