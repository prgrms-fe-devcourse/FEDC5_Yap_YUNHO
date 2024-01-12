import React from "react"
import * as S from "./PostCardUserProfile.Styles"
import { PostCardUserProfileProps } from "../../PostCard.Types"

const PostCardUserProfile = ({
  imgUrl,
}: PostCardUserProfileProps): React.ReactNode => {
  return (
    <S.PostCardUserProfileLayout>
      <S.PostCardUserProfileImg
        src={imgUrl}
        alt=""
      />
    </S.PostCardUserProfileLayout>
  )
}

export default PostCardUserProfile
