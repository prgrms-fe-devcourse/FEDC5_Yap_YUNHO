import React from "react"
import * as S from "./PostCardContent.Styles"
import { PostCardContentProps } from "../../PostCard.Types"

export const PostCardContent = ({
  content,
  textPercent,
}: PostCardContentProps): React.ReactNode => {
  return (
    <S.PostCardContentLayout>
      <S.PostCardContentText $textPercent={textPercent}>
        {content}
      </S.PostCardContentText>
    </S.PostCardContentLayout>
  )
}
