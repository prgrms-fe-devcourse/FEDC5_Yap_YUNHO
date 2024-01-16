import { AUTH_API } from "@/apis/Api"

const getMessageGroupListAPI = async () => {
  try {
    const res = await AUTH_API.get("/messages/conversations")
    return res.data
  } catch (error) {
    return []
  }
}

export default getMessageGroupListAPI
