import { create } from "zustand"

interface UsePostEditModalStore {
  isShowEditModal: boolean
  showEditModal: () => void
  closeEditModal: () => void
}

const usePostEditModalStore = create<UsePostEditModalStore>((set) => ({
  isShowEditModal: false,
  showEditModal: () => set(() => ({ isShowEditModal: true })),
  closeEditModal: () => set(() => ({ isShowEditModal: false })),
}))

export default usePostEditModalStore
