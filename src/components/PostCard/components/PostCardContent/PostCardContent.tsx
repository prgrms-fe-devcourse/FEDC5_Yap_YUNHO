import React from "react"
import * as S from "./PostCardContent.Styles"
import { PostCardContentProps } from "../../PostCard.Types"

export const PostCardContent = ({
  content,
  textPercentage,
}: PostCardContentProps): React.ReactElement => {
  return (
    <S.PostCardContentLayout>
      <S.PostCardContentText $textPercentage={textPercentage}>
        {content}
      </S.PostCardContentText>
    </S.PostCardContentLayout>
  )
}
