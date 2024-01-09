import * as S from "./SearchInput.Styles"
import { SearchInputBarLayout } from "./components/SearchInputBar/SearchInputBar.Styles"
import { SearchInputFilterLayout } from "./components/SearchInputFilter/SearchInputFilter.Styles"

const SearchInput = () => {
  return (
    <S.SearchInputLayout>
      <SearchInputFilterLayout />
      <SearchInputBarLayout />
    </S.SearchInputLayout>
  )
}

export default SearchInput
