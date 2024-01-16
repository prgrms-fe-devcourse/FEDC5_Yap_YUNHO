import { AUTH_API } from "@/apis/Api"

const getMessageGroupListAPI = async () => {
  return await AUTH_API.get("/messages/conversations")
    .then((res) => res.data)
    .catch(() => [])
}

export default getMessageGroupListAPI
