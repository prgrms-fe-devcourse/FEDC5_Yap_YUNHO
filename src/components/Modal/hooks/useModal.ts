import { useState } from "react"

const useModal = () => {
  const [isModalToggle, setIsModalToggle] = useState(false)

  const showModal = () => {
    setIsModalToggle(true)
  }

  const closeModal = () => {
    setIsModalToggle(false)
  }

  return {
    isModalToggle,
    showModal,
    closeModal,
  }
}

export default useModal
