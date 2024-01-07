import { create } from "zustand"

interface UseModalDepth {
  modalDepth: number
  increaseModal: () => void
  decreaseModal: () => void
}

const useModalDepth = create<UseModalDepth>((set) => ({
  modalDepth: 0,
  increaseModal: () => set((store) => ({ modalDepth: store.modalDepth + 1 })),
  decreaseModal: () => set((store) => ({ modalDepth: store.modalDepth - 1 })),
}))

export default useModalDepth
