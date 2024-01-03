import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { User } from "../types"
import { AUTH_USER_INITIAL_USER_DATA } from "../constants/stores"
import authToken from "./AuthToken"
import axios from "axios"

interface AuthUserStore {
  isLoggedIn: boolean
  user: User
  setLogin: (user: User, token: string) => void
  setLogout: () => void
  authUser: () => void
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
      authToken.removeToken()
      set(() => ({
        isLoggedIn: false,
        user: AUTH_USER_INITIAL_USER_DATA,
      }))
    },
    authUser: async () => {
      try {
        const res = await axios.get(
          "https://kdt.frontend.5th.programmers.co.kr:5012/auth-user",
          {
            headers: {
              Authorization: `bearer ${authToken.getToken()}`,
            },
          },
        )
        if (res.status === 200) {
          const user = res.data
          const token = authToken.getToken()
          return { user, token }
        }
        return { user: null, token: null }
      } catch (e) {
        console.log("사용자 인증 실패")
        return { user: null, token: null }
      }
    },
  })),
)

export default useAuthUserStore
