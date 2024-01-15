import { useState } from "react"

const useSessionStorage = <T>(
  key: string,
  initialData: T,
): [T, (newData: T) => void, () => void] => {
  const [data, setData] = useState<T>(() => {
    try {
      const res = sessionStorage.getItem(key)

      if (!res) {
        return initialData
      }

      return JSON.parse(res)
    } catch (e) {
      console.error(e)
      return initialData
    }
  })

  const setSessionStorage = (newData: T) => {
    try {
      const stringifiedData = JSON.stringify(newData)
      sessionStorage.setItem(key, stringifiedData)
      setData(newData)
    } catch (e) {
      console.error(e)
    }
  }

  const removeSessionStorageItem = () => {
    sessionStorage.removeItem(key)
  }

  return [data, setSessionStorage, removeSessionStorageItem]
}

export default useSessionStorage
