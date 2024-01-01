import { create } from "zustand"
import { Category } from "@/Pages/Home/components/CategoryBar/CategoryBar.Types"

export const INITIAL_CATEGORY = {
  name: "전체",
  id: "all",
  description: "장르 불문, 모든 장르를 추천해 드립니다!",
}

interface UseCategoryList {
  categoryList: Category[]
  fetchList: (newList: Category[]) => void
}

const useCategoryListStore = create<UseCategoryList>((set) => ({
  categoryList: [],
  fetchList: (newList) => set({ categoryList: [INITIAL_CATEGORY, ...newList] }),
}))

export default useCategoryListStore
