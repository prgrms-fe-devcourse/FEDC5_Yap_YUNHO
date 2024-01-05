import { useState } from "react"
import useModalDepth from "../store/useModalDepth"

const useModal = () => {
  const [isModalToggle, setIsModalToggle] = useState(false)
  const { increaseModal, decreaseModal } = useModalDepth()

  const showModal = () => {
    setIsModalToggle(true)
    increaseModal()
  }

  const closeModal = () => {
    setIsModalToggle(false)
    decreaseModal()
  }

  return {
    isModalToggle,
    showModal,
    closeModal,
  }
}

export default useModal
