import axios from "axios"
import authToken from "@/stores/authToken"
import { InternalAxiosRequestConfig } from "axios"

const { VITE_API_BASE_URL } = import.meta.env

export const API = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 2000,
})

export const AUTH_API = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 2000,
})

AUTH_API.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = authToken.getToken()
    config.headers.Authorization = token ? `bearer ${token}` : null
    return config
  },

  (error) => Promise.reject(error.response),
)
