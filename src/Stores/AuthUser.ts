import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { User } from "../Types"
import { AUTH_USER_INITIAL_USER_DATA } from "../Constants/Stores"

interface AuthUser {
  isLogin: boolean
  user: User
  token: string
  setAuth: (user: User, token: string) => void
  setUnAuth: () => void
}

const authUser = create<AuthUser>()(
  devtools((set) => ({
    isLogin: false,
    user: AUTH_USER_INITIAL_USER_DATA,
    token: "",
    setAuth: (user, token) =>
      set(() => ({
        isLogin: true,
        user: user,
        token: token,
      })),
    setUnAuth: () =>
      set(() => ({
        isLogin: false,
        user: AUTH_USER_INITIAL_USER_DATA,
        token: "",
      })),
  })),
)

export default authUser
