import { AUTH_API } from "@/apis/Api"

const getMessageGroupListAPI = async () => {
  try {
    const res = await AUTH_API.get("/messages/conversations")
    return res.data
  } catch (error) {
    console.error(error, "전체 메시지 목록 받아옴 실패")
  }
}

export default getMessageGroupListAPI
