import * as S from "./SearchInput.Styles"
import SearchInputBar from "./components/SearchInputBar/SearchInputBar"
import SearchInputFilter from "./components/SearchInputFilter/SearchInputFilter"

const SearchInput = ({ showResults }) => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilter />
      <SearchInputBar showResults={showResults} />
    </S.SearchInputLayout>
  )
}

export default SearchInput
