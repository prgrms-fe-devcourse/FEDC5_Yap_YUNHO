import React, { useCallback, useEffect, useState } from "react"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useNavigate } from "react-router-dom"
import useModal from "@/components/Modal/hooks/useModal"
import AlertModal from "@/components/Modal/components/AlertModal/AlertModal"

interface PostEditAuthCheckerProps {
  children: React.ReactNode
  authorId: string
  onCloseInnerModal: () => void
}

const PostEditAuthChecker = ({
  children,
  onCloseInnerModal,
  authorId,
}: PostEditAuthCheckerProps) => {
  const navigation = useNavigate()
  const { isShowModal, showModal, closeModal } = useModal()
  const [alertMessage, setAlertMessage] = useState("")
  const { isLoggedIn, user } = useAuthUserStore()

  const handleCloseModal = useCallback(() => {
    closeModal()

    onCloseInnerModal()
    navigation("/")
  }, [closeModal, navigation, onCloseInnerModal])

  useEffect(() => {
    if (authorId === user._id) {
      setAlertMessage("접근이 불가능 합니다")
      showModal()
      return
    }

    if (isLoggedIn) {
      setAlertMessage("로그인 후 이용해 주세요!")
      showModal()
      return
    }
  }, [
    alertMessage,
    authorId,
    closeModal,
    isLoggedIn,
    isShowModal,
    onCloseInnerModal,
    showModal,
    user._id,
  ])

  return (
    <>
      {!alertMessage && <>{children}</>}
      <AlertModal
        isShow={isShowModal}
        alertMessage={alertMessage}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default PostEditAuthChecker
