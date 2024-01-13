import { API } from "@/apis/Api"
import * as S from "./SearchInputBar.Styles"
import { useState } from "react"
import { Search } from "@mui/icons-material"
import {
  SEARCH_INPUT_BAR_PLACEHOLDER,
  SEARCH_INPUT_BAR_CHANGE_TIMER_DELAY,
} from "@/components/Search/Search.Constants"

const SearchInputBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("")

  let timer: number | null | undefined = null
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(async () => {
      setSearchKeyword(e.target.value)

      if (e.target.value) {
        const { data } = await API.get(`/search/all/${e.target.value}`)
        console.log(data)
      }
    }, SEARCH_INPUT_BAR_CHANGE_TIMER_DELAY)
  }

  return (
    <S.SearchBarForm onSubmit={(e) => e.preventDefault()}>
      <S.SearchBarInput
        type="search"
        placeholder={SEARCH_INPUT_BAR_PLACEHOLDER}
        name="searchbar"
        onChange={handleInputChange}
      />
      {!searchKeyword && (
        <S.SearchIconLayout>
          <Search />
        </S.SearchIconLayout>
      )}
    </S.SearchBarForm>
  )
}

export default SearchInputBar
