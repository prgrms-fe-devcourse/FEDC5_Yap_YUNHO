import { AUTH_API } from "@/apis/Api"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import useModal from "@/components/Modal/hooks/useModal"
import { POST_DETAIL_ERROR_MESSAGE } from "@/constants/errorMessage"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const FETCH_MUTATION_UN_FOLLOW_KEY =
  "IT_IS_FETCH_MUTATION_KEY_781521784628175281"

const useFetchUnFollow = () => {
  const { updateUser } = useAuthUserStore()
  const queryClient = useQueryClient()
  const fetchUnFollowMutate = useMutation({
    mutationKey: [FETCH_MUTATION_UN_FOLLOW_KEY],
    mutationFn: fetchUnFollow,
    onSuccess: () => {
      queryClient.refetchQueries()

      AUTH_API.get("/auth-user")
        .then((res) => res.data)
        .then((data) => updateUser(data))
    },
    onError: () => {
      showModal()
    },
  })
  const { isShowModal, showModal, closeModal } = useModal()

  const UnFollowErrorAlertModal = isShowModal && (
    <AlertModal
      isShow={isShowModal}
      onClose={closeModal}
      alertMessage={POST_DETAIL_ERROR_MESSAGE.USER.UN_FOLLOW}
    />
  )

  return { fetchUnFollowMutate, UnFollowErrorAlertModal }
}

export default useFetchUnFollow

const fetchUnFollow = (id: string) => {
  const response = AUTH_API.delete("/follow/delete", {
    data: { id },
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
  return response
}
