import { useState } from "react"
import * as S from "./SearchModal.Styles"
import SearchInput from "./components/SearchInput/SearchInput"
import Modal from "../Modal/Modal"
import useSearchModalStore from "./stores/useSearchModalStore"
import { SearchFilter } from "./SearchModal.Types"
import SearchResult from "./components/SearchResult/SearchResult"

const SearchModal = () => {
  const [keyword, setKeyword] = useState("")
  const [searchFilter, setSearchFilter] = useState<SearchFilter>("all")
  const { isShowSearchModal, closeSearchModal } = useSearchModalStore()

  const handleCloseModal = () => {
    closeSearchModal()
    setKeyword("")
  }

  return (
    <Modal
      isShow={isShowSearchModal}
      onClose={handleCloseModal}
      clickAwayEnable={true}
    >
      <S.SearchLayout>
        <SearchInput
          handleKeyword={(keyword: string) => setKeyword(keyword)}
          onSelectFilter={(filter: SearchFilter) => setSearchFilter(filter)}
        />
        <SearchResult
          keyword={keyword}
          selectedFilter={searchFilter}
          onClickResultItem={() => setKeyword("")}
        />
      </S.SearchLayout>
    </Modal>
  )
}

export default SearchModal
