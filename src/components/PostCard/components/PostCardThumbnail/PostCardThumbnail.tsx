import React from "react"
import * as S from "./PostCardThumbnail.Styles"
import { PostCardThumbnailProps } from "../../PostCard.Types"
import { NOT_FOUND_IMAGE } from "@/components/PostEdit/constants/PostEdit.Constants"

const PostCardThumbnail = ({
  imgUrl,
  postId,
  onNavigatePostDetail,
}: PostCardThumbnailProps): React.ReactNode => {
  const isNotFoundImage = imgUrl === NOT_FOUND_IMAGE.CHECK_KEY

  const handleClickImage = (postId: string) => {
    if (onNavigatePostDetail) {
      onNavigatePostDetail(postId)
    }
  }

  return (
    <S.PostCardThumbnailLayout>
      <S.PostCardThumbnailImg
        $isCursor={!!onNavigatePostDetail}
        onClick={() => handleClickImage(postId)}
        src={isNotFoundImage ? NOT_FOUND_IMAGE.URL : imgUrl}
      />
    </S.PostCardThumbnailLayout>
  )
}

export default PostCardThumbnail
