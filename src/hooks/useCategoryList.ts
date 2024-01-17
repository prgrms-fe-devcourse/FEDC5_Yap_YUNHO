import { Category } from "@/pages/Home/components/CategoryBar/CategoryBar.Types"
import { API } from "@/apis/Api"
import { Channel } from "@/types"
import { useQuery } from "@tanstack/react-query"

const QUERY_KEY_CATEGORY_LIST = "IT_IS_CATEGORY_LIST_QUERY_KEY_723445213"

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
