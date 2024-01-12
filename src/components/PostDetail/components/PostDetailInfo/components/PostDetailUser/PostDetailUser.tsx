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
  const { user, isLoggedIn } = useAuthUserStore()
  const { fetchFollowMutate, FollowErrorAlertModal } = useFetchFollow()
  const { fetchUnFollowMutate, UnFollowErrorAlertModal } = useFetchUnFollow()

  const { author } = post
  const { image, fullName, followers } = author
  const followerCount = convertFollowCount(followers.length)

  const hasFollowingData = user.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (fetchFollowMutate.isPending) {
      return
    }
    fetchFollowMutate.mutate(author._id)
  }

  const handleClickUnFollow = () => {
    if (hasFollowingData) {
      fetchUnFollowMutate.mutate(hasFollowingData._id)
    }
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

      {isLoggedIn &&
        !isMyPost &&
        (hasFollowingData ? (
          <S.PostDetailFollowButton onClick={handleClickUnFollow}>
            {"언 팔로우"}
          </S.PostDetailFollowButton>
        ) : (
          <S.PostDetailFollowButton onClick={handleClickFollow}>
            {"팔로우"}
          </S.PostDetailFollowButton>
        ))}

      {FollowErrorAlertModal}
      {UnFollowErrorAlertModal}
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
