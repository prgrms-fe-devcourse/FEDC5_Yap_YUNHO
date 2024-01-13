import { AUTH_API } from "@/apis/Api"

interface SignupUploadPhotoParam {
  userToken: string
  formData: FormData
}

export const signupUploadPhoto = async ({
  userToken,
  formData,
}: SignupUploadPhotoParam) => {
  return await AUTH_API.post("/users/upload-photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${userToken}`,
    },
  })
    .then((res) => {
      return { user: res.data, userToken: userToken }
    })
    .catch((error) => {
      throw Error(error)
    })
}
