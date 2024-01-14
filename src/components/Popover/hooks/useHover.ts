import { useEffect, useRef, useState } from "react"

const useHover = () => {
  const [isHover, setIsHover] = useState(false)
  const [refPosition, setRefPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })
  const hoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current } = hoverRef

    if (!current) {
      return
    }

    const handleMouseEnter = () => {
      setIsHover(true)
      const currentPosition = current.getBoundingClientRect()
      setRefPosition(currentPosition)
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
  console.log(refPosition)

  return {
    hoverRef,
    isHover,
    refPosition,
  }
}

export default useHover
