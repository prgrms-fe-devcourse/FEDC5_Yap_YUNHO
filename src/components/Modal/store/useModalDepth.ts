import { create } from "zustand"

interface UseModalDepth {
  modalDepth: number
  increaseModal: () => void
  decreaseModal: (modalCount: number) => void
}

const useModalDepth = create<UseModalDepth>((set) => ({
  modalDepth: 0,
  increaseModal: () => set((store) => ({ modalDepth: store.modalDepth + 1 })),
  decreaseModal: (modalCount) => set(() => ({ modalDepth: modalCount })),
}))

export default useModalDepth
