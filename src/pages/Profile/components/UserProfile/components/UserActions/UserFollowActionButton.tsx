import * as S from "./UserActions.Styles"

import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

interface followInfoProp {
  user: string
}

interface FollowButtonProps {
  onFollowButtonClick: () => void
  onUnFollowButtonClick: () => void
}

const UserFollowActionButton = ({
  onFollowButtonClick,
  onUnFollowButtonClick,
}: FollowButtonProps) => {
  const { id } = useParams()
  const { user } = useAuthUserStore()

  const { fetchFollowMutate } = useFetchFollow()
  const { fetchUnFollowMutate } = useFetchUnFollow()

  const [followInfoId, setFollowInfoId] = useState("")

  useEffect(() => {
    const { following } = user

    const followInfo = following.find(({ user }: followInfoProp) => user === id)
    if (followInfo) {
      setFollowInfoId(followInfo._id)
    }
  }, [])

  const handleFollowButton = () => {
    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    if (followInfoId) {
      fetchUnFollowMutate.mutate(followInfoId, {
        onSuccess: () => {
          setFollowInfoId("")
          onUnFollowButtonClick()
        },
      })

      return
    }

    fetchFollowMutate.mutate(id!, {
      onSuccess: ({ _id }) => {
        setFollowInfoId(_id)
        onFollowButtonClick()
      },
    })
  }

  return (
    <S.UserActionButton
      $width={9}
      onClick={handleFollowButton}
      $isFollowing={!!followInfoId}
    >
      {followInfoId ? "언팔로우" : "팔로우"}
    </S.UserActionButton>
  )
}

export default UserFollowActionButton
