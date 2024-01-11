import { API } from "@/apis/Api"
import { JSONPost, User } from "@/types"
import { useQuery } from "@tanstack/react-query"

const GET_SEARCH_RESULT_QUERY_KEY = "GET_SEARCH_RESULT"

const useSearchResult = (keyword: string) => {
  const { data } = useQuery({
    queryKey: [GET_SEARCH_RESULT_QUERY_KEY, keyword],
    queryFn: async () => {
      if (!keyword) {
        return []
      }

      const { data } = await API.get(`/search/all/${keyword}`)

      return data
    },
    select: (results) => {
      const resultList = results.map((result: User | JSONPost) => {
        if ("fullName" in result) {
          return {
            type: "user",
            id: result._id,
            title: result.fullName,
            image: "",
            isOnline: result.isOnline,
          }
        } else {
          const { content, thumbnail } = JSON.parse(result.title)

          const keywordIndex = content.indexOf(keyword)

          if (keywordIndex === -1) {
            return {}
          }

          return {
            type: "post",
            id: result._id,
            title:
              (keywordIndex > 0 ? "..." : "") +
              content.slice(keywordIndex, content.length),
            image: thumbnail,
          }
        }
      })

      return resultList
    },
  })

  return data
}

export default useSearchResult
