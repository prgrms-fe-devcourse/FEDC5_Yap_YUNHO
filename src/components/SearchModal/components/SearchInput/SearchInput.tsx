import { SearchInputProps } from "../../SearchModal.Types"
import * as S from "./SearchInput.Styles"
import SearchInputBar from "./components/SearchInputBar/SearchInputBar"
import SearchInputFilter from "./components/SearchInputFilter/SearchInputFilter"

const SearchInput = ({ handleKeyword, onSelectFilter }: SearchInputProps) => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilter onSelectFilter={onSelectFilter} />
      <SearchInputBar handleKeyword={handleKeyword} />
    </S.SearchInputLayout>
  )
}

export default SearchInput
