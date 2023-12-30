import { create } from "zustand"
import { Category } from "../Pages/Home/components/CategoryBar/CategoryBar.Types"

// API 구현 이전까지 테스트 값
const DUMMY_CATEGORY_LIST: Category[] = [
  { name: "휴식", id: "11" },
  { name: "출근길", id: "22" },
  { name: "퇴근길", id: "33" },
  { name: "잠들때", id: "44" },
  { name: "에너지 충전", id: "55" },
  { name: "로맨스", id: "66" },
]

interface UseCategoryList {
  categoryList: Category[]
  fetchCategoryList: () => void
}

const useCategoryList = create<UseCategoryList>((set) => ({
  categoryList: [{ name: "전체", id: "all" }],
  // 이후 API 와 연결 예정
  fetchCategoryList: () => set({ categoryList: [...DUMMY_CATEGORY_LIST] }),
}))

export default useCategoryList
