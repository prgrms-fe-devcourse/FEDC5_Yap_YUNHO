import { showResultProp } from "../../SearchModal.Types"
import * as S from "./SearchInput.Styles"
import SearchInputBar from "./components/SearchInputBar/SearchInputBar"
import SearchInputFilter from "./components/SearchInputFilter/SearchInputFilter"

const SearchInput = ({ handleKeyword }: showResultProp) => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilter />
      <SearchInputBar handleKeyword={handleKeyword} />
    </S.SearchInputLayout>
  )
}

export default SearchInput
