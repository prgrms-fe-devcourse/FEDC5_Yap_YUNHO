import { useState } from "react"
import * as S from "./Search.Styles"
import SearchInput from "./components/SearchInput/SearchInput"
import SearchResult from "./components/SearchResult/SearchResult"

const Search = () => {
  const [keyword, setKeyword] = useState("")

  return (
    <S.SearchLayout>
      <SearchInput showResults={(keyword) => setKeyword(keyword)} />
      <SearchResult keyword={keyword} />
    </S.SearchLayout>
  )
}

export default Search
