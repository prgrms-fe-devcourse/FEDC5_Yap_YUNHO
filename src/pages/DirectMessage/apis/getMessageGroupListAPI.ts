import { AUTH_API } from "@/apis/Api"

const getMessageGroupListAPI = async () => {
  // 인증을 매번 해야하는 번거로움 존재
  return await AUTH_API.get("messages/conversations")
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "전체 메시지 목록 받아옴 실패")
      return []
    })
}

export default getMessageGroupListAPI
