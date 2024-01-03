import { useEffect, useRef, useState } from "react"

const useNavbarToggle = () => {
  const [isToggle, setIsToggle] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const handleOutSideClick = (e: Event) => {
    const current = toggleRef.current
    if (isToggle && current && !current.contains(e.target as Node)) {
      setIsToggle(false)
    }
  }

  const handleToggle = () => {
    setIsToggle((prevIsToggle: boolean) => !prevIsToggle)
  }

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick)

    return () => {
      document.removeEventListener("click", handleOutSideClick)
    }
  }, [isToggle])

  return { isToggle, toggleRef, handleToggle }
}

export default useNavbarToggle
