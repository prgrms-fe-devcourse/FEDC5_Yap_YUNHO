import * as S from "./Search.Styles"
import SearchInput from "./components/SearchInput/SearchInput"
import { SearchResultLayout } from "./components/SearchResult/SearchResult.Styles"

const Search = () => {
  return (
    <S.SearchLayout>
      <SearchInput />
      <SearchResultLayout />
    </S.SearchLayout>
  )
}

export default Search
