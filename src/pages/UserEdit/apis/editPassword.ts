import { AUTH_API } from "@/apis/Api"

interface EditPasswordParam {
  password: string
}

const editPassword = async (requestBody: EditPasswordParam) => {
  return await AUTH_API.put("/settings/update-password", requestBody)
    .then((res) => {
      console.log("edit password", res)
      return res
    })
    .catch((e) => {
      console.error(e)
      throw Error(e)
    })
}

export default editPassword
