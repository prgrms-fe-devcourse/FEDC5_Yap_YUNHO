import * as S from "./SearchResultItem.Styles"
import SearchResultItemTitle from "./components/SearchResultItemTitle"
import { useLocation, useNavigate } from "react-router-dom"
import useSearchModalStore from "@/components/SearchModal/stores/useSearchModalStore"
import MessageProfile from "@/pages/DirectMessage/components/MessageGroupList/MessageGroupUserlist/MessageProfile/MessageProfile"
import { SearchResultType } from "@/components/SearchModal/SearchModal.Types"

const SearchResultItem = ({
  resultInfo,
  onClickResultItem,
}: SearchResultType) => {
  const navigate = useNavigate()
  const { closeSearchModal } = useSearchModalStore()
  const { pathname } = useLocation()

  const checkName = pathname === "/" ? "/post" : pathname
  const { type, id, title, image, isOnline, keyword } = resultInfo

  const onNavigate = () => {
    navigate(
      type === "user" ? `/profile/${id}` : `${checkName}/postdetail/${id}`,
    )
    onClickResultItem()
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
