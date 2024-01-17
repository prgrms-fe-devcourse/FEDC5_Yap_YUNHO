import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { login } from "../apis/login"
import useAuthUserStore from "@/stores/useAuthUserStore"

import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"
import { LOGIN_PAGE_ERROR_MESSAGE } from "@/constants/errorMessage"

const LOGIN_MUTATION_QUERY_KEY = "LOGIN_MUTATION_QUERY_KEY"

interface UserInfoRef {
  [key: string]: string
}

const useLogin = () => {
  const userInfoRef = useRef<UserInfoRef>({ email: "", password: "" })
  const { isShowModal, showModal, closeModal } = useModal()
  const { setLogin } = useAuthUserStore()

  const updateUserInfo = (value: string, name: string) => {
    userInfoRef.current[name] = value
  }
  const AlertModalComponent = isShowModal ? (
    <AlertModal
      isShow={isShowModal}
      alertMessage={LOGIN_PAGE_ERROR_MESSAGE.LOGIN_REQUEST_ERROR}
      onClose={closeModal}
    />
  ) : null

  const loginApi = useMutation({
    mutationKey: [LOGIN_MUTATION_QUERY_KEY],
    mutationFn: login,
    onSuccess: ({ user, token }) => {
      setLogin(user, token)
    },
    onError: () => {
      showModal()
    },
  })

  return { userInfoRef, updateUserInfo, AlertModalComponent, loginApi }
}

export default useLogin
