import { SEARCH_RESULT_COUNT } from "../../SearchModal.Constants"
import {
  keywordProp,
  searchResultProps,
  typeProp,
} from "../../SearchModal.Types"
import useSearchResult from "../../hooks/useSearchResult"
import * as S from "./SearchResult.Styles"
import SearchResultItem from "./components/SearchResultItem/SearchResultItem"
import * as SS from "./components/SearchResultList.Styles"

const SearchResult = ({ keyword }: keywordProp) => {
  const results = useSearchResult(keyword)

  const users = results
    ?.filter(({ type }: typeProp) => type === "user")
    .map(({ type, id, title, isOnline, image }: searchResultProps) => (
      <SearchResultItem
        key={id}
        id={id}
        type={type}
        image={image}
        title={title}
        isOnline={isOnline}
        keyword={keyword}
      />
    ))

  const posts = results
    ?.filter(({ type }: typeProp) => type === "post")
    .map(({ type, id, title, image }: searchResultProps) => (
      <SearchResultItem
        key={id}
        id={id}
        type={type}
        image={image}
        title={title}
        keyword={keyword}
      />
    ))

  return (
    <S.SearchResultLayout>
      {users?.length > 0 && (
        <SS.SearchResultListLayout>
          <SS.SearchResultListTitle>{"사용자"}</SS.SearchResultListTitle>
          {users.slice(0, SEARCH_RESULT_COUNT)}
        </SS.SearchResultListLayout>
      )}
      {posts?.length > 0 && (
        <SS.SearchResultListLayout>
          <SS.SearchResultListTitle>{"포스트"}</SS.SearchResultListTitle>
          {posts.slice(0, SEARCH_RESULT_COUNT)}
        </SS.SearchResultListLayout>
      )}
    </S.SearchResultLayout>
  )
}

export default SearchResult
