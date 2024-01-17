import {
  onSelectFilterProp,
  searchFilter,
} from "@/components/SearchModal/SearchModal.Types"
import * as S from "./SearchInputFilter.Styles"
import React, { useState } from "react"
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import useToggle from "@/hooks/useToggle"

const SearchInputFilter = ({ onSelectFilter }: onSelectFilterProp) => {
  const [filter, setFilter] = useState("전체")
  // const [isVisibleDropdown, setIVisibleDropdown] = useState(false)
  const { isToggle, toggleRef, handleToggle } = useToggle()

  const handleClickText = () => {
    console.log("kkk")
    handleToggle()
    // setIVisibleDropdown(!isVisibleDropdown)
  }

  const handleClickOption = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { value, textContent } = e.target as HTMLButtonElement
    if (!textContent || !value) {
      return
    }
    setFilter(textContent)
    onSelectFilter(value as searchFilter)
    // setIVisibleDropdown(false)
  }

  return (
    <S.SelectContainer>
      <S.SelectTextContainer
        ref={toggleRef}
        onClick={handleClickText}
      >
        {filter}
        {isToggle ? <ArrowDropUp /> : <ArrowDropDown />}
      </S.SelectTextContainer>
      <S.OptionConatiner $isVisible={isToggle}>
        <S.OptionButton
          value="all"
          onClick={handleClickOption}
        >
          전체
        </S.OptionButton>
        <S.OptionButton
          value="users"
          onClick={handleClickOption}
        >
          사용자
        </S.OptionButton>
        <S.OptionButton
          value="posts"
          onClick={handleClickOption}
        >
          포스트
        </S.OptionButton>
      </S.OptionConatiner>
    </S.SelectContainer>
  )
}

export default SearchInputFilter
