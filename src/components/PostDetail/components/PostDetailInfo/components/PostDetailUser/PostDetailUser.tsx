import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"

interface PostDetailInfoUserProps {
  post: Post
}

const PostDetailUser = ({ post }: PostDetailInfoUserProps) => {
  const { image, fullName, followers } = post.author
  const followerCount = convertFollowCount(followers.length)

  return (
    <S.PostDetailUserLayout>
      <S.PostDetailUserContainer>
        <S.PostDetailUserProfile $src={image} />
        <S.PostDetailUserInfo>
          <S.PostDetailUserName>{fullName}</S.PostDetailUserName>
          <S.PostDetailUserFollower>{`팔로워 ${followerCount}`}</S.PostDetailUserFollower>
        </S.PostDetailUserInfo>
      </S.PostDetailUserContainer>
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
