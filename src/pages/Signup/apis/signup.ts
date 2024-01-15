import { API } from "@/apis/Api"

interface RequestBody {
  email: string
  fullName: string
  password: string
}

export const signup = async (requestBody: RequestBody) => {
  return await API.post("/signup", requestBody)
    .then((res) => {
      console.log("signup :", res.data)

      return res.data
    })
    .catch((error) => {
      throw Error(error)
    })
}
