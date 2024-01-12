import * as S from "./SearchInputBar.Styles"
import { Search } from "@mui/icons-material"
import {
  SEARCH_INPUT_BAR_PLACEHOLDER,
  SEARCH_INPUT_BAR_CHANGE_TIMER_DELAY,
} from "@/components/SearchModal/SearchModal.Constants"
import { useState, useEffect } from "react"
import { showResultProp } from "@/components/SearchModal/SearchModal.Types"

const SearchInputBar = ({ showResults }: showResultProp) => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [isFocusOnBar, setIsFocusOnBar] = useState(false)

  useEffect(() => {
    showResults(searchKeyword)
  }, [searchKeyword, showResults])

  let timer: number | null | undefined = null
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(async () => {
      setSearchKeyword(e.target.value)
    }, SEARCH_INPUT_BAR_CHANGE_TIMER_DELAY)
  }

  return (
    <S.SearchBarForm onSubmit={(e) => e.preventDefault()}>
      <S.SearchBarInput
        type="search"
        placeholder={SEARCH_INPUT_BAR_PLACEHOLDER}
        name="searchbar"
        onChange={handleInputChange}
        onFocus={() => setIsFocusOnBar(true)}
        onBlur={() => setIsFocusOnBar(false)}
      />
      {!isFocusOnBar && (
        <S.SearchIconLayout>
          <Search />
        </S.SearchIconLayout>
      )}
    </S.SearchBarForm>
  )
}

export default SearchInputBar
