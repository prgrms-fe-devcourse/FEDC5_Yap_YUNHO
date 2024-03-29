import { API } from "@/apis/Api"

interface UserInfoRef {
  email: string
  password: string
}

export const login = async (userInfo: UserInfoRef) => {
  return await API.post("/login", userInfo)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}
