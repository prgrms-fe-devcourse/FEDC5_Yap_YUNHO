import { AUTH_API } from "@/apis/Api"

const editUserProfileImage = async (formData: FormData) => {
  return await AUTH_API.post("/users/upload-photo", formData)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw Error(e)
    })
}

export default editUserProfileImage
