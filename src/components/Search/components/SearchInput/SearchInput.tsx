import * as S from "./SearchInput.Styles"
import SearchInputBar from "./components/SearchInputBar/SearchInputBar"
import SearchInputFilter from "./components/SearchInputFilter/SearchInputFilter"

const SearchInput = () => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilter />
      <SearchInputBar />
    </S.SearchInputLayout>
  )
}

export default SearchInput
