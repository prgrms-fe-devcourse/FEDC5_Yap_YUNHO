import { useEffect, useRef, useState } from "react"

const useSlider = ({ initialValue }: { initialValue: number }) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [value, setValue] = useState(initialValue)

  const handleMouseDown = () => {
    setIsDragging(true)
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

      const calcValue = handlerOffset / current.offsetWidth
      let checkedValue = Math.max(0, calcValue)
      checkedValue = Math.min(1, checkedValue)

      setValue(checkedValue)
    }

    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDragging])

  return { sliderRef, value, handleMouseDown }
}

export default useSlider
