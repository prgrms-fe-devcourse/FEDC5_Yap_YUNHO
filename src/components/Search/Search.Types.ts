export interface keywordProp {
  keyword: string
}

export interface typeProp {
  type: string
}
export interface searchResultProps {
  type: "user" | "post"
  id: string
  title: string
  image: string
  isOnline?: boolean
}

export type showResultProp = {
  showResults: (keyword: string) => void
}
