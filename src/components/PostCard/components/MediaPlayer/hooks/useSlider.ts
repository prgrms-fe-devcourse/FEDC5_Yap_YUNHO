import React, { useEffect, useRef, useState } from "react"

const useSlider = ({ initialPercent }: { initialPercent: number }) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [newPercent, setNewPercent] = useState(initialPercent)

  const handleMouseDown = ({ clientX }: React.MouseEvent) => {
    setIsDragging(true)

    const { current } = sliderRef
    if (!current) {
      return
    }

    const rect = current.getBoundingClientRect()
    const handlerOffset = clientX - rect.left
    const calcPercent = handlerOffset / current.offsetWidth
    let checkedPercent = Math.max(0, calcPercent)
    checkedPercent = Math.min(1, checkedPercent)

    setNewPercent(checkedPercent)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseMove = ({ clientX }: MouseEvent) => {
      if (!isDragging) {
        return
      }
      const { current } = sliderRef
      if (!current) {
        return
      }

      const rect = current.getBoundingClientRect()
      const handlerOffset = clientX - rect.left
      const calcPercent = handlerOffset / current.offsetWidth
      let checkedPercent = Math.max(0, calcPercent)
      checkedPercent = Math.min(1, checkedPercent)

      setNewPercent(checkedPercent)
    }

    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDragging])

  return { sliderRef, newPercent, handleMouseDown }
}

export default useSlider
