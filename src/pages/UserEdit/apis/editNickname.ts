import { AUTH_API } from "@/apis/Api"

interface EditNicknameParam {
  fullName: string
  username: string
}

const editNickname = async (requestBody: EditNicknameParam) => {
  return await AUTH_API.put("/settings/update-user", requestBody)
    .then((res) => {
      console.log("res", res)
      return true
    })
    .catch((e) => {
      console.error(e)
      return false
    })
}

export default editNickname
