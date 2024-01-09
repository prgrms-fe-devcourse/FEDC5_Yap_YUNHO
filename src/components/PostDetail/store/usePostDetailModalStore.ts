import { create } from "zustand"

interface UsePostDetailModalStore {
  isShowPostDetail: boolean
  showPostDetail: () => void
  closePostDetail: () => void
}

const usePostDetailModalStore = create<UsePostDetailModalStore>((set) => ({
  isShowPostDetail: false,
  showPostDetail: () => set(() => ({ isShowPostDetail: true })),
  closePostDetail: () => set(() => ({ isShowPostDetail: false })),
}))

export default usePostDetailModalStore
