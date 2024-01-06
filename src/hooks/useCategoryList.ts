import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"
import { API } from "@/apis/Api"
import { Channel } from "@/types"
import { useQuery } from "@tanstack/react-query"

const QUERY_KEY_CATEGORY_LIST = "CategoryListQueryKey"
export const INITIAL_CATEGORY = {
  name: "전체",
  id: "all",
  description: "장르 불문, 모든 장르를 추천해 드립니다!",
}

const useCategoryList = (): Category[] => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_CATEGORY_LIST],
    queryFn: async () => {
      return await API("/channels").then((res) => {
        if (!res) {
          return []
        }
        return res.data
      })
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,

    select: (fetchedList: Channel[]) => {
      const newCategoryList = fetchedList.map((fetchData) => {
        const newCategory: Category = {
          id: fetchData._id,
          name: fetchData.name,
          description: fetchData.description,
        }

        return newCategory
      })

      return [INITIAL_CATEGORY, ...newCategoryList]
    },
  })

  if (!data) {
    return [INITIAL_CATEGORY]
  }
  return data
}

export default useCategoryList
