import { AUTH_API } from "@/apis/Api"

interface EditPasswordParam {
  password: string
}

const editPassword = async (requestBody: EditPasswordParam) => {
  return await AUTH_API.put("/settings/update-password", requestBody)
    .then((res) => {
      console.log("res", res)
      return true
    })
    .catch((e) => {
      console.error(e)
      return false
    })
}

export default editPassword
