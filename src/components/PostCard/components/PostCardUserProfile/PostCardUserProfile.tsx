import React from "react"
import * as S from "./PostCardUserProfile.Styles"
import { PostCardUserProfileProps } from "../../PostCard.Types"
import ReadMoreIcon from "@mui/icons-material/ReadMore"
import UserInfoPopover from "@/components/UserInfo/UserInfoPopover"

const PostCardUserProfile = ({
  hasProfile,
  postId,
  onNavigatePostDetail,
  imgUrl,
}: PostCardUserProfileProps): React.ReactNode => {
  const imageSrc = imgUrl ? imgUrl : "src/assets/standard.jpeg"

  return (
    <S.PostCardUserProfileLayout>
      {hasProfile && (
        <S.PostCardUserProfileImgLayout>
          <UserInfoPopover
            isPostCard={true}
            userId="none"
          >
            <S.PostCardUserProfileImg
              src={imageSrc}
              alt=""
            />
          </UserInfoPopover>
        </S.PostCardUserProfileImgLayout>
      )}
      {onNavigatePostDetail && (
        <S.PostCardShowMoreButton onClick={() => onNavigatePostDetail(postId)}>
          {"더 보기"}
          <ReadMoreIcon />
        </S.PostCardShowMoreButton>
      )}
    </S.PostCardUserProfileLayout>
  )
}

export default PostCardUserProfile
