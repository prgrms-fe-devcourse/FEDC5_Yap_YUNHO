import { AUTH_API } from "@/apis/Api"

interface EditNicknameParam {
  fullName: string
  username: string
}

const editNickname = async (requestBody: EditNicknameParam) => {
  return await AUTH_API.put("/settings/update-user", requestBody)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}

export default editNickname
