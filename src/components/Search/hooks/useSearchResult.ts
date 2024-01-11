import { API } from "@/apis/Api"
import { useQuery } from "@tanstack/react-query"

const GET_SEARCH_RESULT_QUERY_KEY = "GET_SEARCH_RESULT"

interface useSearchResultProps {
  keyword: string
}

const useSearchResult = (keyword) => {
  const { data } = useQuery({
    queryKey: [GET_SEARCH_RESULT_QUERY_KEY, keyword],
    queryFn: async () => {
      const { data } = await API.get(`/search/all/${keyword}`)
      return data
    },
    select: (results) => {
      const resultList = results.map((result) => {
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
          if (!content.includes(keyword)) {
            return {}
          }

          return {
            type: "post",
            id: result._id,
            title: content,
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
