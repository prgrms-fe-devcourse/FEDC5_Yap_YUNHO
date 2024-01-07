import React from "react"
import * as S from "./PostCardThumbnail.Styles"
import { PostCardThumbnailProps } from "../../PostCard.Types"
import { NOT_FOUND_IMAGE } from "@/components/PostEdit/constants/PostEdit.Constants"

const PostCardThumbnail = ({
  imgUrl,
}: PostCardThumbnailProps): React.ReactNode => {
  const isNotFoundImage = imgUrl === NOT_FOUND_IMAGE.CHECK_KEY

  return (
    <S.PostCardThumbnailLayout>
      <S.PostCardThumbnailImg
        src={isNotFoundImage ? NOT_FOUND_IMAGE.URL : imgUrl}
      />
    </S.PostCardThumbnailLayout>
  )
}

export default PostCardThumbnail
