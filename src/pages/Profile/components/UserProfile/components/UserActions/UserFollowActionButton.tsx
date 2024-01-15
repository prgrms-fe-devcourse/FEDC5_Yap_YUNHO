import * as S from "./UserActions.Styles"

import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"
import { useEffect, useState } from "react"
import { API } from "@/apis/Api"
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
  const { myId } = useAuthUserStore()
  const { fetchFollowMutate } = useFetchFollow()
  const { fetchUnFollowMutate } = useFetchUnFollow()

  const [followInfoId, setFollowInfoId] = useState("")

  useEffect(() => {
    API.get(`/users/${myId}`)
      .then((res) => res.data)
      .then(({ following }) => {
        const followInfo = following.find(
          ({ user }: followInfoProp) => user === id,
        )

        if (followInfo) {
          setFollowInfoId(followInfo._id)
        }
      })
  }, [id, myId])

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
