import { SearchResultType } from "../../Search.Types"
import useSearchResult from "../../hooks/useSearchResult"
import * as S from "./SearchResult.Styles"
import SearchResultItem from "./components/SearchResultItem/SearchResultItem"
import * as SS from "./components/SearchResultList.Styles"

interface resultProps {
  type: "user" | "post"
  id: string
  title: string
  image: string
  isOnline?: boolean
}

const SearchResult = ({ keyword }) => {
  const results = useSearchResult(keyword)

  const users = results
    ? results
        .filter(({ type }) => type === "user")
        .map(({ type, id, title, isOnline, image }: resultProps) => (
          <SearchResultItem
            key={id}
            type={type}
            image={image}
            title={title}
            isOnline={isOnline}
          />
        ))
    : []

  const posts = results
    ? results
        .filter(({ type }) => type === "post")
        .map(({ type, id, title, image }: resultProps) => (
          <SearchResultItem
            key={id}
            type={type}
            image={image}
            title={title}
          />
        ))
    : []

  return (
    <S.SearchResultLayout>
      {users.length > 0 && (
        <SS.SearchResultListLayout>
          <SS.SearchResultListTitle>{"사용자"}</SS.SearchResultListTitle>
          {users.slice(0, 7)}
        </SS.SearchResultListLayout>
      )}
      {posts.length > 0 && (
        <SS.SearchResultListLayout>
          <SS.SearchResultListTitle>{"포스트"}</SS.SearchResultListTitle>
          {posts.slice(0, 7)}
        </SS.SearchResultListLayout>
      )}
    </S.SearchResultLayout>
  )
}

export default SearchResult
