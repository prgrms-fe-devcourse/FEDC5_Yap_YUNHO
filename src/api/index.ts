import axios from "axios"
import authToken from "../stores/AuthToken"

const { VITE_API_BASE_URL } = import.meta.env
const API_ERROR_MESSAGE = {
  POST_DATA_CHECK_ARRAY: "is Array ❌",
}

export const API = axios.create({
  baseURL: VITE_API_BASE_URL,
  // 요청이 `timeout`보다 오래 걸리면 요청이 중단됩니다.
  timeout: 2000,
})

export const GET_API = async (path: string) => {
  try {
    const res = await API.get(path, {
      headers: {
        Authorization: authToken.getToken(),
      },
    })

    return res
  } catch (e) {
    console.error(e)
  }
}

export const POST_API = async (path: string, data: object) => {
  try {
    // 올바른 타입 가드일까?
    if (data instanceof Array) {
      return console.error(API_ERROR_MESSAGE.POST_DATA_CHECK_ARRAY)
    }

    const res = await API.post(path, data, {
      headers: {
        Authorization: authToken.getToken(),
      },
    })
    return res
  } catch (e) {
    console.error(e)
  }
}
