import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { User } from "../types"
import { AUTH_USER_INITIAL_USER_DATA } from "../constants/stores"
import authToken from "./AuthToken"


interface AuthUserStore {
  isLoggedIn: boolean
  user: User
  setLogin: (user: User, token: string) => void
  setLogout: () => void
}

const useAuthUserStore = create<AuthUserStore>()(
  devtools((set) => ({
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
      authToken.setToken("")
      set(() => ({
        isLoggedIn: false,
        user: AUTH_USER_INITIAL_USER_DATA,
      }))
    },
  })),
)

export default useAuthUserStore
