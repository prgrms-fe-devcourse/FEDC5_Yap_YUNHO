import * as S from "./UserActions.Styles"

import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

interface followInfoProp {
  user: string
}

interface FollowButtonProps {
  onFollowButtonClick: () => void
  onUnFollowButtonClick: () => void
  onClick: () => void
}

const UserFollowActionButton = ({
  onFollowButtonClick,
  onUnFollowButtonClick,
  onClick,
}: FollowButtonProps) => {
  const { id } = useParams()
  const { user, isLoggedIn } = useAuthUserStore()

  const { fetchFollowMutate, FollowErrorAlertModal } = useFetchFollow()
  const { fetchUnFollowMutate, UnFollowErrorAlertModal } = useFetchUnFollow()

  const followInfo = user.following.find(
    ({ user }: followInfoProp) => user === id,
  )
  const followInfoId = followInfo?._id

  const handleFollowButton = () => {
    if (!isLoggedIn) {
      onClick()
      return
    }

    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    if (followInfoId) {
      fetchUnFollowMutate.mutate(followInfoId, {
        onSuccess: () => {
          onUnFollowButtonClick()
        },
      })

      return
    }

    fetchFollowMutate.mutate(id!, {
      onSuccess: () => {
        onFollowButtonClick()
      },
    })
  }

  return (
    <>
      <S.UserActionButton
        $width={9}
        onClick={handleFollowButton}
        $isFollowing={!!followInfoId}
      >
        {followInfoId ? "언팔로우" : "팔로우"}
      </S.UserActionButton>
      {isLoggedIn && (
        <>
          {FollowErrorAlertModal}
          {UnFollowErrorAlertModal}
        </>
      )}
    </>
  )
}

export default UserFollowActionButton
