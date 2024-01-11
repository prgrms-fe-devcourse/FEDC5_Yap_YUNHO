import DMListProfile from "@/pages/DirectMessage/components/DMList/DMListProfile"
import * as S from "./SearchResultItem.Styles"
import SearchResultItemImage from "./components/SearchResultItemImage"
import SearchResultItemTitle from "./components/SearchResultItemTitle"

interface SearchResultItemProps {
  image: string
  title: string
  isOnline?: boolean
  type: "user" | "post"
}

const SearchResultItem = ({
  image,
  title,
  isOnline = false,
  type,
}: SearchResultItemProps) => {
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
