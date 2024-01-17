import { searchFilter, showResultProp } from "../../SearchModal.Types"
import * as S from "./SearchInput.Styles"
import SearchInputBar from "./components/SearchInputBar/SearchInputBar"
import SearchInputFilter from "./components/SearchInputFilter/SearchInputFilter"

const SearchInput = ({ handleKeyword, onSelectFilter }: showResultProp) => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilter onSelectFilter={onSelectFilter} />
      <SearchInputBar
        handleKeyword={handleKeyword}
        onSelectFilter={() => {}}
      />
    </S.SearchInputLayout>
  )
}

export default SearchInput
