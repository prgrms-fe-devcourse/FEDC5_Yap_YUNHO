import { AUTH_API } from "@/apis/Api"
import { useState } from "react"

const useGetMyProfileImg = () => {
  const [myProfileImg, setMyProfileImg] = useState("")
  const getMyProfileImg = async () => {
    const { image } = await AUTH_API.get(`/auth-user`).then((res) => res.data)
    setMyProfileImg(image)
  }

  getMyProfileImg()

  return { myProfileImg }
}

export default useGetMyProfileImg
