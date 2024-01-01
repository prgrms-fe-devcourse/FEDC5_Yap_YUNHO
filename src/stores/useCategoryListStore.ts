import { create } from "zustand"
import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"
import { GET_API } from "@/apis/Api"

export const INITIAL_CATEGORY = { name: "전체", id: "all" }

interface UseCategoryList {
  categoryList: Category[]
  fetchCategoryList: () => void
}

const useCategoryList = create<UseCategoryList>((set) => ({
  categoryList: [INITIAL_CATEGORY],
  fetchCategoryList: async () => {
    await GET_API("channels").then((res) => {
      console.log(res)

      set({ categoryList: [INITIAL_CATEGORY] })
    })
  },
}))

// set({ categoryList: [INITIAL_CATEGORY, ...DUMMY_CATEGORY_LIST] }),

export default useCategoryList

// [
//   ({
//     authRequired: false,
//     posts: [],
//     _id: "658afcdeef2fa724b416d228",
//     name: "첫번째",
//     description: "첫번째",
//     createdAt: "2023-12-26T16:18:38.952Z",
//     updatedAt: "2023-12-26T16:18:38.952Z",
//     __v: 0,
//   },
//   {
//     authRequired: false,
//     posts: [],
//     _id: "658afddc9bebfb24f0b5ba8f",
//     name: "두번째",
//     description: "658aa44efc3ac71f7467ab27",
//     createdAt: "2023-12-26T16:22:52.207Z",
//     updatedAt: "2023-12-26T16:22:52.207Z",
//     __v: 0,
//   })
// ]
