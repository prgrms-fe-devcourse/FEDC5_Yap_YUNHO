import { useCallback, useRef } from "react"

const useSearchFilter = () => {
  const customSelectRef = useRef<HTMLDivElement>(null)
  const selectButtonRef = useRef<HTMLButtonElement>(null)
  const selectedValueRef = useRef<HTMLSpanElement>(null)

  const selectCurrent = customSelectRef.current
  const buttonCurrent = selectButtonRef.current
  const selectedValueCurrent = selectedValueRef.current

  if (!selectCurrent || !buttonCurrent || !selectedValueCurrent) {
    return {
      customSelectRef,
      selectButtonRef,
      selectedValueRef,
      handleClickSelect: () => {},
      handleClickOption: () => {},
    }
  }

  const handleClickSelect = useCallback(() => {
    selectCurrent.classList.toggle("active")
    buttonCurrent.setAttribute(
      "aria-expanded",
      buttonCurrent?.getAttribute("aria-expanded") === "true"
        ? "false"
        : "true",
    )
  }, [buttonCurrent, selectCurrent.classList])

  const handleClickOption = (e) => {
    console.log(e.target)
    const { target } = e
    if (target.targetclientX !== 0 && target.clientY !== 0) {
      selectedValueCurrent.textContent = target.textContent
      selectCurrent?.classList.remove("active")
    }
  }

  return {
    customSelectRef,
    selectButtonRef,
    selectedValueRef,
    handleClickSelect,
    handleClickOption,
  }
}

export default useSearchFilter
