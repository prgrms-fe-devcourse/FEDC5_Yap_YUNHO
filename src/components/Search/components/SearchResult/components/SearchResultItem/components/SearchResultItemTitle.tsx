import * as S from "./SearchResultItemTitle.Styles"

interface SearchResultItemTitle {
  title: string
  keyword: string
}

const SearchResultItemTitle = ({ title, keyword }: SearchResultItemTitle) => {
  const keywordIndex = title.indexOf(keyword)
  const beforeKeywordTitle = keywordIndex ? title.slice(0, keywordIndex) : ""
  const afterKeywordTitle = title.slice(keywordIndex + keyword.length)

  return (
    <S.SearchResultItemTitleContainer>
      <S.SearchResultItemText>{beforeKeywordTitle}</S.SearchResultItemText>
      <S.SearchResultItemStrongText>{keyword}</S.SearchResultItemStrongText>
      <S.SearchResultItemText>{afterKeywordTitle}</S.SearchResultItemText>
    </S.SearchResultItemTitleContainer>
  )
}

export default SearchResultItemTitle
