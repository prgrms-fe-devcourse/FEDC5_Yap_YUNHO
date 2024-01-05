export type HandleEditPost = (param: {
  type: "thumbnail" | "mediaUrl" | "content" | "category"
  value: string
}) => void
