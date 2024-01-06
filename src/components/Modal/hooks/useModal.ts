import { useState } from "react"
import useModalDepth from "../store/useModalDepth"

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const { increaseModal, decreaseModal } = useModalDepth()

  const showModal = () => {
    setIsShowModal(true)
    increaseModal()
  }

  const closeModal = () => {
    setIsShowModal(false)
    decreaseModal()
  }

  return {
    isShowModal,
    showModal,
    closeModal,
  }
}

export default useModal
