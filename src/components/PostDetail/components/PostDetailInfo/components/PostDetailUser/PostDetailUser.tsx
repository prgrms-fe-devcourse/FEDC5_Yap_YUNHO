import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useFetchFollow from "@/hooks/useFetchFollow"

interface PostDetailInfoUserProps {
  isMyPost: boolean
  post: Post
}

const PostDetailUser = ({ post, isMyPost }: PostDetailInfoUserProps) => {
  const { user } = useAuthUserStore()
  const fetchFollowMutate = useFetchFollow()

  const { author } = post
  const { image, fullName, followers } = author
  const followerCount = convertFollowCount(followers.length)

  const hasFollowData = user.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (hasFollowData) {
      console.log(hasFollowData)
    }
    fetchFollowMutate.mutate(author._id)
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
