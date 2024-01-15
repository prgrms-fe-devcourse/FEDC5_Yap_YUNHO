import { AUTH_API } from "@/apis/Api"

const editUserProfileImage = async (formData: FormData) => {
  return await AUTH_API.post("/users/upload-photo", formData)
    .then((res) => {
      console.log("res", res)
      return true
    })
    .catch((e) => {
      console.error(e)
      return false
    })
}

export default editUserProfileImage
