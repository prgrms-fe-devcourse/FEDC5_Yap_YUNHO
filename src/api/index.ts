import axios from "axios"

const { VITE_API_BASE_URL } = import.meta.env

export const API = axios.create({
  baseURL: VITE_API_BASE_URL,
  // 요청이 `timeout`보다 오래 걸리면 요청이 중단됩니다.
  timeout: 2000,
})

export const GET_API = async (path: string, token: string = "") => {
  try {
    const res = await API.get(path, {
      headers: {
        Authorization: token,
      },
    })

    return res
  } catch (e) {
    console.error(e)
  }
}
