import DMListProfile from "@/pages/DirectMessage/components/DMList/DMListProfile"
import * as S from "./SearchResultItem.Styles"
import SearchResultItemImage from "./components/SearchResultItemImage"
import SearchResultItemTitle from "./components/SearchResultItemTitle"
import { searchResultProps } from "@/components/Search/Search.Types"

const SearchResultItem = ({
  id,
  image,
  title,
  isOnline = false,
  type,
}: searchResultProps) => {
  return (
    <S.SearchResultItemContainer>
      {type === "user" ? (
        <DMListProfile isSeen={isOnline} /> //수정예정
      ) : (
        <SearchResultItemImage src={image} />
      )}
      <SearchResultItemTitle title={title} />
    </S.SearchResultItemContainer>
  )
}

export default SearchResultItem
