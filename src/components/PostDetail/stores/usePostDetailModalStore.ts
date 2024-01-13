import { create } from "zustand"

interface UsePostDetailModalStore {
  isShowPostDetail: boolean
  showDetailModal: () => void
  closeDetailModal: () => void
}

const usePostDetailModalStore = create<UsePostDetailModalStore>((set) => ({
  isShowPostDetail: false,
  showDetailModal: () => set(() => ({ isShowPostDetail: true })),
  closeDetailModal: () => set(() => ({ isShowPostDetail: false })),
}))

export default usePostDetailModalStore
