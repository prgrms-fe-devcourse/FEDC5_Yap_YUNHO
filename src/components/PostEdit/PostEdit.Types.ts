export type HandleEditPost = (param: {
  type: "thumbnail" | "mediaUrl" | "content" | "category"
  value: string
}) => void

export interface EditPostState {
  thumbnail: string
  mediaUrl: string
  content: string
  category: string
  postId: string
  authorId: string
}
