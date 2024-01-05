import { useState } from "react"

const useConfirm = () => {
  const [isConfirmToggle, setIsConfirmToggle] = useState(false)

  const showConfirm = () => {
    setIsConfirmToggle(true)
  }

  const closeConfirm = (response: boolean) => {
    setIsConfirmToggle(false)

    return response
  }

  return {
    isConfirmToggle,
    showConfirm,
    closeConfirm,
  }
}

export default useConfirm
