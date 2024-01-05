import { useCallback, useEffect, useRef, useState } from "react"

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const handleOutSideClick = useCallback(
    (e: MouseEvent) => {
      const { current } = toggleRef

      if (!isToggle) {
        return
      }

      if (!current || !(e.target instanceof HTMLButtonElement)) {
        return
      }

      if (!current.contains(e.target)) {
        setIsToggle(false)
      }
    },
    [isToggle],
  )

  const handleToggle = () => {
    setIsToggle((prevIsToggle) => !prevIsToggle)
  }

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick)

    return () => {
      document.removeEventListener("click", handleOutSideClick)
    }
  }, [isToggle, handleOutSideClick])

  return { isToggle, toggleRef, handleToggle }
}

export default useToggle
