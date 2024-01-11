import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { User } from "../types"
import { AUTH_USER_INITIAL_USER_DATA } from "../constants/stores"
import authToken from "./authToken"

const PERSIST_STORAGE_KEY = "userLoginStore"

interface AuthUserStore {
  isLoggedIn: boolean
  user: User
  setLogin: (user: User, token: string) => void
  setLogout: () => void
}

const useAuthUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: AUTH_USER_INITIAL_USER_DATA,

      setLogin: (user, token) => {
        authToken.setToken(token)
        set(() => ({
          isLoggedIn: true,
          user: user,
        }))
      },
      setLogout: () => {
        authToken.removeToken()
        set(() => ({
          isLoggedIn: false,
          user: AUTH_USER_INITIAL_USER_DATA,
        }))
      },
    }),
    {
      name: PERSIST_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        user: state.user,
      }),
    },
  ),
)

export default useAuthUserStore
