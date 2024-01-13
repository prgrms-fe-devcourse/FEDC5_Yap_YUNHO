import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { login } from "../apis/login"
import useAuthUserStore from "@/stores/useAuthUserStore"

import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

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
      alertMessage="잘못된 이메일이거나 잘못된 비밀번호의 조합입니다."
      onClose={closeModal}
    />
  ) : null

  const LoginApi_send = useMutation({
    mutationKey: [LOGIN_MUTATION_QUERY_KEY],
    mutationFn: login,
    onSuccess: ({ user, token }) => {
      setLogin(user, token)
    },
    onError: () => {
      showModal()
    },
  })

  return { userInfoRef, updateUserInfo, AlertModalComponent, LoginApi_send }
}

export default useLogin
