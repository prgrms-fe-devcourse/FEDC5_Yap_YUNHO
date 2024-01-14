import { create } from "zustand"

interface UseSearchModalStore {
  isShowSearchModal: boolean
  showSearchModal: () => void
  closeSearchModal: () => void
}

const useSearchModalStore = create<UseSearchModalStore>((set) => ({
  isShowSearchModal: false,
  showSearchModal: () => set(() => ({ isShowSearchModal: true })),
  closeSearchModal: () => set(() => ({ isShowSearchModal: false })),
}))

export default useSearchModalStore
