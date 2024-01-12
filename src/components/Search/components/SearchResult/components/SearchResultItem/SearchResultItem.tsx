import DMListProfile from "@/pages/DirectMessage/components/DMList/DMListProfile"
import * as S from "./SearchResultItem.Styles"
import SearchResultItemImage from "./components/SearchResultItemImage"
import SearchResultItemTitle from "./components/SearchResultItemTitle"
import { searchResultProps } from "@/components/Search/Search.Types"
import { useNavigate } from "react-router-dom"
import useSearchModalStore from "@/components/Search/stores/useSearchModalStore"

const SearchResultItem = ({
  id,
  image,
  title,
  isOnline = false,
  type,
  keyword,
}: searchResultProps) => {
  const navigate = useNavigate()
  const { closeSearchModal } = useSearchModalStore()

  const onNavigate = () => {
    navigate(type === "user" ? `/directmessage/${id}` : `/postdetail/${id}`)
    closeSearchModal()
  }

  return (
    <S.SearchResultItemContainer onClick={() => onNavigate()}>
      {type === "user" ? (
        <DMListProfile isSeen={isOnline} /> //수정예정
      ) : (
        <SearchResultItemImage src={image} />
      )}
      <SearchResultItemTitle
        title={title}
        keyword={keyword}
      />
    </S.SearchResultItemContainer>
  )
}

export default SearchResultItem
