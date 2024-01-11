import * as S from "./SearchResultItemTitle.Styles"

interface SearchResultItemTitle {
  title: string
}

const SearchResultItemTitle = ({ title }: SearchResultItemTitle) => {
  return (
    <S.SearchResultItemTitleContainer>{title}</S.SearchResultItemTitleContainer>
  )
}

export default SearchResultItemTitle
