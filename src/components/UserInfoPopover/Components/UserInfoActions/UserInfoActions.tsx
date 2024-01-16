import { User } from "@/types"
import * as S from "./UserInfoActions.Styles"
import { useNavigate } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import useFetchFollow from "@/hooks/useFetchFollow"
import useFetchUnFollow from "@/hooks/useFetchUnFollow"

interface UserInfoActionsProps {
  author: User
}

const UserInfoActions = ({ author }: UserInfoActionsProps) => {
  const { fetchFollowMutate, FollowErrorAlertModal } = useFetchFollow()
  const { fetchUnFollowMutate, UnFollowErrorAlertModal } = useFetchUnFollow()
  const { user: authUser, isLoggedIn } = useAuthUserStore()
  const navigate = useNavigate()

  const isMyInformation = authUser._id === author._id
  const hasFollowingData = authUser.following.find(
    (following) => following.user === author._id,
  )

  const handleClickFollow = () => {
    if (FollowErrorAlertModal || UnFollowErrorAlertModal) {
      return
    }

    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    fetchFollowMutate.mutate(author._id)
  }

  const handleClickUnFollow = () => {
    if (FollowErrorAlertModal || UnFollowErrorAlertModal) {
      return
    }

    if (fetchFollowMutate.isPending || fetchUnFollowMutate.isPending) {
      return
    }

    if (hasFollowingData) {
      fetchUnFollowMutate.mutate(hasFollowingData._id)
    }
  }

  return (
    <>
      <S.UserInfoActionsLayout>
        {isLoggedIn && !isMyInformation && (
          <>
            <S.UserInfoButtons
              onClick={() => navigate(`/directmessage/${author._id}`)}
            >
              DM
            </S.UserInfoButtons>

            {isLoggedIn &&
              !isMyInformation &&
              (hasFollowingData ? (
                <S.UserInfoButtons
                  disabled={
                    fetchFollowMutate.isPending || fetchUnFollowMutate.isPending
                  }
                  onClick={handleClickUnFollow}
                >
                  {"언 팔로우"}
                </S.UserInfoButtons>
              ) : (
                <S.UserInfoButtons
                  disabled={
                    fetchFollowMutate.isPending || fetchUnFollowMutate.isPending
                  }
                  onClick={handleClickFollow}
                >
                  {"팔로우"}
                </S.UserInfoButtons>
              ))}
          </>
        )}
      </S.UserInfoActionsLayout>

      {FollowErrorAlertModal}
      {UnFollowErrorAlertModal}
    </>
  )
}

export default UserInfoActions
