import { create } from "zustand"

interface UsePostEditModal {
  isShowEditModal: boolean
  showEditModal: () => void
  closeEditModal: () => void
}

const usePostEditModal = create<UsePostEditModal>((set) => ({
  isShowEditModal: false,
  showEditModal: () => set(() => ({ isShowEditModal: true })),
  closeEditModal: () => set(() => ({ isShowEditModal: false })),
}))

export default usePostEditModal
