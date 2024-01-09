import { useCallback, useState } from "react"

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  const showModal = useCallback(() => {
    setIsShowModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsShowModal(false)
  }, [])

  return {
    isShowModal,
    showModal,
    closeModal,
  }
}

export default useModal
