import { AUTH_API } from "@/apis/Api"

interface SignupUploadPhotoParam {
  authToken: string
  formData: FormData
}

export const signupUploadPhoto = async ({
  authToken,
  formData,
}: SignupUploadPhotoParam) => {
  return await AUTH_API.post("/users/upload-photo", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${authToken}`,
    },
  })
    .then((res) => {
      return { user: res.data, authToken: authToken }
    })
    .catch((error) => {
      throw Error(error)
    })
}
