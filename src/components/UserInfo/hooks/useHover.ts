import { useEffect, useRef, useState } from "react"

const useHover = () => {
  const [isHover, setIsHover] = useState(false)
  const hoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current } = hoverRef

    if (!current) {
      return
    }

    const handleMouseEnter = () => {
      setIsHover(true)
    }

    const handleMouseLeave = () => {
      setIsHover(false)
    }

    current.addEventListener("mouseenter", handleMouseEnter)
    current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      current.removeEventListener("mouseenter", handleMouseEnter)
      current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return {
    hoverRef,
    isHover,
  }
}

export default useHover
