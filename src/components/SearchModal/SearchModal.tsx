import { useState } from "react"
import * as S from "./SearchModal.Styles"
import SearchInput from "./components/SearchInput/SearchInput"
import SearchResult from "./components/SearchResult/SearchResult"
import Modal from "../Modal/Modal"
import useSearchModalStore from "./stores/useSearchModalStore"
import { searchFilter } from "./SearchModal.Types"

const SearchModal = () => {
  const [keyword, setKeyword] = useState("")
  const [searchFilter, setSearchFilter] = useState<searchFilter>("all")
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
          onSelectFilter={(filter: searchFilter) => setSearchFilter(filter)}
        />
        <SearchResult
          keyword={keyword}
          selectedFilter={searchFilter}
        />
      </S.SearchLayout>
    </Modal>
  )
}

export default SearchModal
