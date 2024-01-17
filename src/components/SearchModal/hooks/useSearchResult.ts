import { API } from "@/apis/Api"
import { JSONPost, User } from "@/types"
import { useQuery } from "@tanstack/react-query"
import findIndexByLowerCase from "@/components/SearchModal/utils/findIndexByLowerCase"
import { searchQueryResult, searchResultProp } from "../SearchModal.Types"

const GET_SEARCH_RESULT_QUERY_KEY = "GET_SEARCH_RESULT"

const useSearchResult = ({ keyword, selectedFilter }: searchResultProp) => {
  const { data, isError } = useQuery({
    queryKey: [GET_SEARCH_RESULT_QUERY_KEY, keyword, selectedFilter],
    queryFn: async () => {
      if (!keyword) {
        return []
      }

      const convertedFilter =
        selectedFilter === "posts" ? "all" : selectedFilter

      const { data } = await API.get(`/search/${convertedFilter}/${keyword}`)

      return data
    },
    select: (results) => {
      const resultList = results.map((result: User | JSONPost) => {
        if ("fullName" in result) {
          if (selectedFilter === "posts") {
            return {}
          }

          return {
            type: "user",
            id: result._id,
            title: result.fullName,
            image: result.image,
            isOnline: result.isOnline,
          }
        } else {
          const { content, thumbnail } = JSON.parse(result.title)

          const keywordIndex = findIndexByLowerCase(content, keyword)

          if (keywordIndex === -1) {
            return {}
          }

          return {
            type: "post",
            id: result._id,
            title:
              (keywordIndex > 0 ? "..." : "") + content.slice(keywordIndex),
            image: thumbnail,
          }
        }
      })

      resultList.sort((a: searchQueryResult, b: searchQueryResult) => {
        if (a.isOnline && !b.isOnline) {
          return -1
        } else if (!a.isOnline && b.isOnline) {
          return 1
        }

        const titleA = a.title || ""
        const titleB = b.title || ""
        return titleA.localeCompare(titleB)
      })

      return resultList
    },
  })

  if (isError) {
    return []
  }

  return data
}

export default useSearchResult
