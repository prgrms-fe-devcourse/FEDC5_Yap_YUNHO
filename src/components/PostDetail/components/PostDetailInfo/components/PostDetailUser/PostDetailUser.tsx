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
  const { mutate: followMutate, isPending: isFollowPending } = fetchFollowMutate
  const { mutate: unFollowMutate, isPending: isUnFollowPending } =
    fetchUnFollowMutate

  const { author } = post
  const { image, fullName, followers } = author
  const followerCount = convertFollowCount(followers.length)

  const hasFollowingData = user.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (isFollowPending || isUnFollowPending) {
      return
    }

    followMutate(author._id)
  }

  const handleClickUnFollow = () => {
    if (isFollowPending || isUnFollowPending) {
      return
    }

    if (hasFollowingData) {
      unFollowMutate(hasFollowingData._id)
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
          <S.PostDetailFollowButton
            disabled={isFollowPending || isUnFollowPending}
            onClick={handleClickUnFollow}
          >
            {"언 팔로우"}
          </S.PostDetailFollowButton>
        ) : (
          <S.PostDetailFollowButton
            disabled={isFollowPending || isUnFollowPending}
            onClick={handleClickFollow}
          >
            {"팔로우"}
          </S.PostDetailFollowButton>
        ))}

      {FollowErrorAlertModal}
      {UnFollowErrorAlertModal}
    </S.PostDetailUserLayout>
  )
}

export default PostDetailUser
