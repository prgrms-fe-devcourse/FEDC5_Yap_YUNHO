import axios from "axios"
import authToken from "../stores/AuthToken"
import { API_ERROR_MESSAGE } from "../constants/ErrorMessage"

const { VITE_API_BASE_URL } = import.meta.env

const API_JWT = axios.create({
  baseURL: VITE_API_BASE_URL,
  timeout: 2000,
  headers: {
    Authorization: authToken.getToken(),
  },
})

export const GET_API_JWT = async (path: string) => {
  try {
    const res = await API_JWT.get(path)

    return res
  } catch (e) {
    console.error(e)
  }
}

export const POST_API_JWT = async (path: string, data: object) => {
  try {
    if (data instanceof Array) {
      return console.error(API_ERROR_MESSAGE.CHECK_ARRAY)
    }

    const res = await API_JWT.post(path, data)
    return res
  } catch (e) {
    console.error(e)
  }
}

export const DELETE_API_JWT = async (path: string, data: object) => {
  try {
    if (data instanceof Array) {
      return console.error(API_ERROR_MESSAGE.CHECK_ARRAY)
    }

    const res = await API_JWT.delete(path, {
      data,
    })

    return res
  } catch (e) {
    console.error(e)
  }
}

export const PUT_API_JWT = async (path: string, data: object) => {
  try {
    if (data instanceof Array) {
      return console.error(API_ERROR_MESSAGE.CHECK_ARRAY)
    }

    const res = await API_JWT.put(path, data)

    return res
  } catch (e) {
    console.error(e)
  }
}
