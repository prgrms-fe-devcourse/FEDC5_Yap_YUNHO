import { Post } from "@/types"
import * as S from "./PostDetailUser.Styles"
import { getConvertedCount } from "@/util/getConvertedCount"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"
import standardImage from "@/assets/standard.jpeg"
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
  const followerCount = getConvertedCount(followers.length)

  const hasFollowingData = user.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    fetchFollowMutate.mutate(author._id)
  }

  const handleClickUnFollow = () => {
    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    if (hasFollowingData) {
      fetchUnFollowMutate.mutate(hasFollowingData._id)
    }
  }

  const imageSrc = image ? image : standardImage

  return (
    <S.PostDetailUserLayout>
      <S.PostDetailUserContainer>
        <S.PostDetailUserProfile $src={imageSrc} />
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
            disabled={
              fetchFollowMutate.isPending || fetchUnFollowMutate.isPending
            }
            onClick={handleClickUnFollow}
          >
            {"언 팔로우"}
          </S.PostDetailFollowButton>
        ) : (
          <S.PostDetailFollowButton
            disabled={
              fetchFollowMutate.isPending || fetchUnFollowMutate.isPending
            }
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
