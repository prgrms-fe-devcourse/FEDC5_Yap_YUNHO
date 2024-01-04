import axios from "axios"
import authToken from "@/stores/AuthToken"
import { API_ERROR_MESSAGE } from "@/constants/errorMessage"

const { VITE_API_BASE_URL } = import.meta.env

const API = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 2000,
})
const typeCheck = Object.prototype.toString

export const GET_API = async (path: string) => {
  try {
    const res = await API.get(path)

    return res
  } catch (e) {
    console.error(e)
  }
}

export const POST_API = async (path: string, data: object) => {
  try {
    if (data && typeCheck.call(data) !== "[object Object]") {
      return console.error(API_ERROR_MESSAGE.CHECK_IS_OBJECT)
    }
    const res = await API.post(path, data)
    return res
  } catch (e) {
    console.error(e)
  }
}

export const LogoutAPI = async (path: string) => {
  try {
    const res = await API.post(path)
    return res
  } catch (e) {
    console.log(e)
  }
}

export const authUser = async () => {
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
}
