import * as S from "./SearchResult.Styles"
import SearchResultList from "./components/SearchResultList"

const SearchResult = () => {
  return (
    <S.SearchResultLayout>
      <SearchResultList></SearchResultList>
      <SearchResultList></SearchResultList>
    </S.SearchResultLayout>
  )
}

export default SearchResult
