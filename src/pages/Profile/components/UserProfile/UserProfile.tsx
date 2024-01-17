import * as S from "./UserProfile.Styles"
import UserActions from "./components/UserActions/UserActions"
import UserFollowInfo from "./components/UserFollowInfo/UserFollowInfo"
import UserNickname from "./components/UserNickname"
import UserProfileImage from "./components/UserProfileImage"
import { AUTH_API } from "@/apis/Api"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { PROFILE_PAGE_ERROR_MESSAGE } from "@/constants/errorMessage"
import useModal from "@/components/Modal/hooks/useModal"
import useAuthUserStore from "@/stores/useAuthUserStore"

const USER_PROFILE_QUERY_KEY = "USER_PROFILE_QUERY_KEY"

const UserProfile = () => {
  const navigate = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()

  const { userId } = useParams()
  const { user } = useAuthUserStore()

  const { data, isLoading, isError } = useQuery({
    queryKey: [USER_PROFILE_QUERY_KEY, userId],
    queryFn: () => AUTH_API.get(`/users/${userId}`).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  })

  const isMyPage = userId === user._id

  const handleCloseErrorModal = () => {
    navigate("/")
    closeModal()
  }

  if (isError) {
    showModal()
  }

  if (isLoading) {
    return
  }

  return (
    <>
      <S.UserProfileLayout>
        {!isLoading && (
          <>
            <UserProfileImage image={isMyPage ? user.image : data.image} />
            <UserNickname nickName={isMyPage ? user.fullName : data.fullName} />
            <UserActions />
            <UserFollowInfo
              followingCount={data.following.length}
              followerCount={data.followers.length}
            />
          </>
        )}
      </S.UserProfileLayout>
      <AlertModal
        isShow={isShowModal}
        alertMessage={PROFILE_PAGE_ERROR_MESSAGE.GET_OTHER_USER}
        onClose={handleCloseErrorModal}
      />
    </>
  )
}

export default UserProfile
