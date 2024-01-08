import { useCallback, useState } from "react"
import useModalDepth from "../store/useModalDepth"

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const { increaseModal, decreaseModal } = useModalDepth()

  const showModal = useCallback(() => {
    setIsShowModal(true)
    increaseModal()
  }, [increaseModal])

  const closeModal = useCallback(() => {
    setIsShowModal(false)
    decreaseModal()
  }, [decreaseModal])

  return {
    isShowModal,
    showModal,
    closeModal,
  }
}

export default useModal
