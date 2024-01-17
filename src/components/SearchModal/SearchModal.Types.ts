export type searchFilter = "all" | "users" | "posts"

export interface searchResultProp {
  keyword: string
  selectedFilter: searchFilter
}

export interface typeProp {
  type: string
}
export interface searchResult {
  type: "user" | "post"
  id: string
  title: string
  image: string
  isOnline?: boolean
  keyword: string
}

export interface searchQueryResult {
  type: "user" | "post"
  id: string
  title: string
  image: string
  isOnline?: boolean
}

export type showResultProp = {
  handleKeyword: (keyword: string) => void
  onSelectFilter: (filter: searchFilter) => void
}

export type onSelectFilterProp = {
  onSelectFilter: (filter: searchFilter) => void
}

export type searchProp = {
  showResults: (keyword: string) => void
  onSelectFilter: (filter: searchFilter) => void
}
