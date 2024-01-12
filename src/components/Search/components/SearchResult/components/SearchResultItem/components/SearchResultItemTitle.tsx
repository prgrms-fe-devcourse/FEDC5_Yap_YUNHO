import findIndexByLowerCase from "@/components/Search/utils/findIndexByLowerCase"
import * as S from "./SearchResultItemTitle.Styles"

interface SearchResultItemTitle {
  title: string
  keyword: string
}

const SearchResultItemTitle = ({ title, keyword }: SearchResultItemTitle) => {
  const keywordIndex = findIndexByLowerCase(title, keyword)
  const matchedTitle = title.slice(keywordIndex, keywordIndex + keyword.length)

  const beforeKeywordTitle =
    keywordIndex > 0 ? title.slice(0, keywordIndex) : ""
  const afterKeywordTitle = title.slice(keywordIndex + keyword.length)

  return (
    <S.SearchResultItemTitleContainer>
      <S.SearchResultItemEllipsisText>
        {beforeKeywordTitle}
      </S.SearchResultItemEllipsisText>
      <S.SearchResultItemStrongText>
        {matchedTitle}
      </S.SearchResultItemStrongText>
      <S.SearchResultItemText>{afterKeywordTitle}</S.SearchResultItemText>
    </S.SearchResultItemTitleContainer>
  )
}

export default SearchResultItemTitle
