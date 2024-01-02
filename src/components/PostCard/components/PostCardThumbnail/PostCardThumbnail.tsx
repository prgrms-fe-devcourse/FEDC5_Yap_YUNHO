import React from "react"
import * as S from "./PostCardThumbnail.Styles"
import { PostCardThumbnailProps } from "../../PostCard.Types"

const PostCardThumbnail = ({
  imgUrl,
}: PostCardThumbnailProps): React.ReactElement => {
  return (
    <S.PostCardThumbnailLayout>
      <S.PostCardThumbnailImg src={imgUrl} />
    </S.PostCardThumbnailLayout>
  )
}

export default PostCardThumbnail
