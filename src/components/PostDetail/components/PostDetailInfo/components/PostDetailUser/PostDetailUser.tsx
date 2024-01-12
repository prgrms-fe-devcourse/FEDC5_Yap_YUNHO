import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import useFollow from "@/hooks/useFollow"
import useAuthUserStore from "@/stores/useAuthUserStore"

interface PostDetailInfoUserProps {
  isMyPost: boolean
  post: Post
}

const PostDetailUser = ({ post, isMyPost }: PostDetailInfoUserProps) => {
  const { followMutate } = useFollow()
  const { user } = useAuthUserStore()

  const { image, fullName, followers } = post.author
  const followerCount = convertFollowCount(followers.length)

  const hasFollowData = user.following.find(
    (following) => following.user === post.author._id,
  )

  const handleClickFollow = () => {
    followMutate.mutate(post.author._id)
  }

  return (
    <S.PostDetailUserLayout>
      <S.PostDetailUserContainer>
        <S.PostDetailUserProfile $src={image} />
        <S.PostDetailUserInfo>
          <S.PostDetailUserName>{fullName}</S.PostDetailUserName>

          <S.PostDetailUserFollower>
            {`팔로워 ${followerCount}`}
          </S.PostDetailUserFollower>
        </S.PostDetailUserInfo>
      </S.PostDetailUserContainer>

      {!isMyPost && (
        <S.PostDetailFollowButton onClick={handleClickFollow}>
          {hasFollowData ? "팔로우" : "언 팔로우"}
        </S.PostDetailFollowButton>
      )}
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
