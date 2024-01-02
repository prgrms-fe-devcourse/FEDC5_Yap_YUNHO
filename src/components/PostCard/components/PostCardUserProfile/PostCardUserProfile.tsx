import React from "react"
import * as S from "./PostCardUserProfile.Styles"
import { PostCardUserProfileProps } from "../../PostCard.Types"

const POST_CARD_USER_PROFILE_ALT_TEXT = "post card posting user profile"

const PostCardUserProfile = ({
  imgUrl,
}: PostCardUserProfileProps): React.ReactElement => {
  return (
    <S.PostCardUserProfileLayout>
      <S.PostCardUserProfileImg
        src={imgUrl}
        alt={POST_CARD_USER_PROFILE_ALT_TEXT}
      />
    </S.PostCardUserProfileLayout>
  )
}

export default PostCardUserProfile
