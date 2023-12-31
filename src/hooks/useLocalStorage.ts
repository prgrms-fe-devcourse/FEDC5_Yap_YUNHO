import { useState } from "react"

const useLocalStorage = <T>(
  key: string,
  initialData: T,
): [T, (newData: T) => void] => {
  const [data, setData] = useState<T>(() => {
    try {
      const res = localStorage.getItem(key)

      if (!res) {
        return initialData
      }

      return JSON.parse(res)
    } catch (e) {
      console.error(e)
      return initialData
    }
  })

  const setLocalStorage = (newData: T) => {
    try {
      const stringifiedData = JSON.stringify(newData)
      localStorage.setItem(key, stringifiedData)
      setData(newData)
    } catch (e) {
      console.error(e)
    }
  }

  return [data, setLocalStorage]
}

export default useLocalStorage
