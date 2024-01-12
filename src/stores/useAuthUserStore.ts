import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { User } from "../types"
import { AUTH_USER_INITIAL_USER_DATA } from "../constants/stores"
import authToken from "./authToken"

const PERSIST_STORAGE_KEY = "userLoginStore"

interface AuthUserStore {
  isLoggedIn: boolean
  user: User
  myId: string
  setLogin: (user: User, token: string) => void
  setLogout: () => void
}

const useAuthUserStore = create<AuthUserStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: AUTH_USER_INITIAL_USER_DATA,
      myId: AUTH_USER_INITIAL_USER_DATA._id,

      setLogin: (user, token) => {
        authToken.setToken(token)
        set(() => ({
          isLoggedIn: true,
          user: user,
          myId: user._id,
        }))
      },
      setLogout: () => {
        authToken.removeToken()
        set(() => ({
          isLoggedIn: false,
          user: AUTH_USER_INITIAL_USER_DATA,
          myId: AUTH_USER_INITIAL_USER_DATA._id,
        }))
      },
    }),
    {
      name: PERSIST_STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        myId: state.myId,
      }),
    },
  ),
)

export default useAuthUserStore

// 채팅방에 있을때 상대방에게 메시지가 오면 update 처리
