import * as S from "./SearchResultItemImage.Styles"

interface SearchResultItemImageProps {
  src: string
}

const SearchResultItemImage = ({ src }: SearchResultItemImageProps) => {
  return <S.SearchResultItemImage src={src}></S.SearchResultItemImage>
}

export default SearchResultItemImage
