import { AUTH_API } from "@/apis/Api"

interface SignupUploadPhotoParam {
  formData: FormData
}

export const signupUploadPhoto = async ({
  formData,
}: SignupUploadPhotoParam) => {
  return await AUTH_API.post("/users/upload-photo", formData)
    .then((res) => {
      console.log("upload-photo : ", res.data)
      return res.data
    })
    .catch((error) => {
      throw Error(error)
    })
}
