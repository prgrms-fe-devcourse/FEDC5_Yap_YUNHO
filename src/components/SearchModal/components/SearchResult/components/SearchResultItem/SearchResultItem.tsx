import * as S from "./SearchResultItem.Styles"
import SearchResultItemTitle from "./components/SearchResultItemTitle"
import { searchResultProps } from "@/components/SearchModal/SearchModal.Types"
import { useNavigate } from "react-router-dom"
import useSearchModalStore from "@/components/SearchModal/stores/useSearchModalStore"
import MessageProfile from "@/pages/DirectMessage/components/MessageGroupList/MessageProfile"

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
    <S.SearchResultItemContainer onClick={onNavigate}>
      {type === "user" ? (
        <MessageProfile
          isOnline={isOnline}
          profileImg={image}
        />
      ) : (
        <S.SearchResultItemImage src={image} />
      )}
      <SearchResultItemTitle
        title={title}
        keyword={keyword}
      />
    </S.SearchResultItemContainer>
  )
}

export default SearchResultItem