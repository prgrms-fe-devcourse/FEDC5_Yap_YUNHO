import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"
import { convertFollowCount } from "@/util/convertFollowCount"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"

interface PostDetailInfoUserProps {
  isMyPost: boolean
  post: Post
}

const PostDetailUser = ({ post, isMyPost }: PostDetailInfoUserProps) => {
  const { user } = useAuthUserStore()
  const fetchFollowMutate = useFetchFollow()
  const fetchUnFollowMutate = useFetchUnFollow()

  const { author } = post
  const { image, fullName, followers } = author
  const followerCount = convertFollowCount(followers.length)

  const hasFollowData = user.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (hasFollowData) {
      fetchUnFollowMutate.mutate(hasFollowData._id)
      return
    }
    fetchFollowMutate.mutate(author._id)
  }

  console.log(hasFollowData)

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
