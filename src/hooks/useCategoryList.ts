import { Category } from "@/pages/Home/components/CategoryBar/CategoryBar.Types"
import { API } from "@/apis/Api"
import { Channel } from "@/types"
import { useQuery } from "@tanstack/react-query"

const QUERY_KEY_CATEGORY_LIST = "CategoryListQueryKey"

// export const INITIAL_CATEGORY = {
//   name: "전체",
//   id: "all",
//   description: "장르 불문, 모든 장르를 추천해 드립니다!",
// }

export const INITIAL_CATEGORY = {
  name: "집중",
  id: "659425a2dcb0c5304e3cd5d2",
  description: "중요한 일에 집중해야 하는 시간이신가요? 이 음악들은 어떤가요?",
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
      return fetchedList.map((fetchData) => {
        const newCategory: Category = {
          id: fetchData._id,
          name: fetchData.name,
          description: fetchData.description,
        }

        return newCategory
      })
    },
  })

  if (!data) {
    return []
  }
  return data
}

export default useCategoryList
