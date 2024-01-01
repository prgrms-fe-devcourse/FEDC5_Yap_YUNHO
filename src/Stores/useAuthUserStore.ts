import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { User } from "@/types"

import { AUTH_USER_INITIAL_USER_DATA } from "@/constants/stores"

interface AuthUserStore {
  isLoggedIn: boolean
  user: User
  token: string
  setLogin: (user: User, token: string) => void
  setLogout: () => void
}

const useAuthUserStore = create<AuthUserStore>()(
  devtools((set) => ({
    isLoggedIn: false,
    user: AUTH_USER_INITIAL_USER_DATA,
    token: "",
    setLogin: (user, token) =>
      set(() => ({
        isLoggedIn: true,
        user: user,
        token: token,
      })),
    setLogout: () =>
      set(() => ({
        isLoggedIn: false,
        user: AUTH_USER_INITIAL_USER_DATA,
        token: "",
      })),
  })),
)

export default useAuthUserStore
