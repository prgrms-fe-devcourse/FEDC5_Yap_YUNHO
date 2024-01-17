export type SearchFilter = "all" | "users" | "posts"

export interface SearchResultProp {
  keyword: string
  selectedFilter: SearchFilter
}

export interface SearchResultProps {
  keyword: string
  selectedFilter: SearchFilter
  onClickResultItem: () => void
}

export interface TypeProp {
  type: string
}
export interface SearchResultType {
  resultInfo: SearchQueryResult
  onClickResultItem: () => void
}

export interface SearchQueryResult {
  type: "user" | "post"
  id: string
  title: string
  image: string
  isOnline?: boolean
  keyword: string
}

export type SearchInputProps = {
  handleKeyword: (keyword: string) => void
  onSelectFilter: (filter: SearchFilter) => void
}

export type SearchInputBarProp = {
  handleKeyword: (keyword: string) => void
}

export type OnSelectFilterProp = {
  onSelectFilter: (filter: SearchFilter) => void
}

export type SearchProp = {
  showResults: (keyword: string) => void
  onSelectFilter: (filter: SearchFilter) => void
}
