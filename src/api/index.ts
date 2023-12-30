import axios from "axios"

const { VITE_API_BASE_URL } = import.meta.env

export const API = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 2000, // 요청이 `timeout`보다 오래 걸리면 요청이 중단됩니다.
})

export const GET_API = async (path: string) => {
  try {
    const res = await API.get(path)

    return res
  } catch (e) {
    console.error(e)
  }
}
