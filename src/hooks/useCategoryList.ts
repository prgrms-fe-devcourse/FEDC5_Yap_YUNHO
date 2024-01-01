import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"
import { GET_API } from "@/apis/Api"
import useCategoryListStore from "@/stores/useCategoryListStore"
import { Channel } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"

const QUERY_KEY_CATEGORY_LIST = "CategoryListQueryKey"

const useCategoryList = (): Category[] => {
  const { categoryList, fetchList } = useCategoryListStore()

  const { data } = useQuery({
    queryKey: [QUERY_KEY_CATEGORY_LIST],
    queryFn: async () => {
      return await GET_API("channels").then((res) => {
        if (!res) {
          return []
        }
        return res.data
      })
    },
  })

  useEffect(
    function categoryListFilter() {
      if (!data) {
        return
      }

      const filteredList: Category[] = data.map((fetchData: Channel) => ({
        id: fetchData._id,
        name: fetchData.name,
        description: fetchData.description,
      }))

      fetchList(filteredList)
    },
    [data, fetchList],
  )

  return categoryList
}

export default useCategoryList
