import { useState } from "react"
import * as S from "./SearchModal.Styles"
import SearchInput from "./components/SearchInput/SearchInput"
import SearchResult from "./components/SearchResult/SearchResult"
import Modal from "../Modal/Modal"
import useSearchModalStore from "./stores/useSearchModalStore"

const SearchModal = () => {
  const [keyword, setKeyword] = useState("")
  const { isShowSearchModal, closeSearchModal } = useSearchModalStore()

  return (
    <Modal
      isShow={isShowSearchModal}
      onClose={closeSearchModal}
      clickAwayEnable={true}
    >
      <S.SearchLayout>
        <SearchInput showResults={(keyword: string) => setKeyword(keyword)} />
        <SearchResult keyword={keyword} />
      </S.SearchLayout>
    </Modal>
  )
}

export default SearchModal
