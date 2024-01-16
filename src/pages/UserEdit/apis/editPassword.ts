import { AUTH_API } from "@/apis/Api"

interface EditPasswordParam {
  password: string
}

const editPassword = async (requestBody: EditPasswordParam) => {
  return await AUTH_API.put("/settings/update-password", requestBody)
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw Error(e)
    })
}

export default editPassword
