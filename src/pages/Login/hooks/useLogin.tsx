import { useRef } from "react"
import type { AllowedLoginInputType } from "../types"
import { useMutation } from "@tanstack/react-query"
import { login } from "../apis/login"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

const LOGIN_MUTATION_QUERY_KEY = "LOGIN_MUTATION_QUERY_KEY"

interface UserInfoRef {
  email: string
  password: string
}

const useLogin = () => {
  const userInfoRef = useRef<UserInfoRef>({ email: "", password: "" })
  const { setLogin } = useAuthUserStore()
  const navigate = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()

  const AlertModalComponent = isShowModal ? (
    <AlertModal
      isShow={isShowModal}
      alertMessage="잘못된 이메일이거나 잘못된 비밀번호의 조합입니다."
      onClose={closeModal}
    />
  ) : null

  const updateUserInfo = (value: string, type: AllowedLoginInputType) => {
    userInfoRef.current[type] = value
  }

  const LoginApi_send = useMutation({
    mutationKey: [LOGIN_MUTATION_QUERY_KEY],
    mutationFn: login,
    onSuccess: ({ user, token }) => {
      setLogin(user, token)
      navigate("/", { replace: true })
    },
    onError: () => {
      showModal()
    },
  })

  return { userInfoRef, updateUserInfo, AlertModalComponent, LoginApi_send }
}

export default useLogin
