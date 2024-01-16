import { AUTH_API } from "@/apis/Api"
import sendNotification from "@/apis/sendNotification"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { Follow } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const FETCH_MUTATION_FOLLOW_KEY = "IT_IS_FETCH_MUTATION_KEY_781521784628175281"

const useFetchFollow = () => {
  const { updateUser } = useAuthUserStore()
  const queryClient = useQueryClient()
  const fetchFollowMutate = useMutation({
    mutationKey: [FETCH_MUTATION_FOLLOW_KEY],
    mutationFn: fetchFollow,
    onSuccess: (response: Follow) => {
      sendNotification({
        notificationType: "FOLLOW",
        userId: response.user,
        notificationTypeId: response._id,
      })

      AUTH_API.get("/auth-user")
        .then((res) => res.data)
        .then((data) => updateUser(data))

      queryClient.refetchQueries()
    },
    onError: () => {
      showModal()
    },
  })
  const { isShowModal, showModal, closeModal } = useModal()

  const FollowErrorAlertModal = isShowModal && (
    <AlertModal
      isShow={isShowModal}
      onClose={closeModal}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.USER.FOLLOW}
    />
  )

  return { fetchFollowMutate, FollowErrorAlertModal }
}

export default useFetchFollow

const fetchFollow = async (targetUserId: string) => {
  return await AUTH_API.post("/follow/create", {
    userId: targetUserId,
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
