import { OnSelectFilterProp } from "@/components/SearchModal/SearchModal.Types"
import * as S from "./SearchInputFilter.Styles"
import React, { useState } from "react"
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material"
import useToggle from "@/hooks/useToggle"

const SearchInputFilter = ({ onSelectFilter }: OnSelectFilterProp) => {
  const [filter, setFilter] = useState("전체")
  const { isToggle, toggleRef, handleToggle } = useToggle()

  const handleClickOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value, textContent } = e.currentTarget
    if (!textContent || !value) {
      return
    }
    setFilter(textContent)

    if (value === "all" || value === "posts" || value === "users") {
      onSelectFilter(value)
    }
  }

  return (
    <S.SelectContainer>
      <S.SelectTextContainer
        ref={toggleRef}
        onClick={handleToggle}
      >
        {filter}
        {isToggle ? <ArrowDropUp /> : <ArrowDropDown />}
      </S.SelectTextContainer>
      <S.OptionContainer $isVisible={isToggle}>
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
      </S.OptionContainer>
    </S.SelectContainer>
  )
}

export default SearchInputFilter
