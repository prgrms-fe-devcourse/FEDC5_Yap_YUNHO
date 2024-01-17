import * as S from "./SearchResultItem.Styles"
import SearchResultItemTitle from "./components/SearchResultItemTitle"
import { useLocation, useNavigate } from "react-router-dom"
import useSearchModalStore from "@/components/SearchModal/stores/useSearchModalStore"
import MessageProfile from "@/pages/DirectMessage/components/MessageGroupList/MessageProfile"
import { searchResult } from "@/components/SearchModal/SearchModal.Types"

const SearchResultItem = ({
  id,
  image,
  title,
  isOnline = false,
  type,
  keyword,
}: searchResult) => {
  const navigate = useNavigate()
  const { closeSearchModal } = useSearchModalStore()
  const { pathname } = useLocation()

  const checkName = pathname === "/" ? "/post" : pathname

  const onNavigate = () => {
    navigate(
      type === "user" ? `/profile/${id}` : `${checkName}/postdetail/${id}`,
    )
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
